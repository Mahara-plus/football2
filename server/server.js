const http = require("http");
const fs = require("fs");
const path = require("path");
const { WebSocketServer } = require("ws");

const WEB_ROOT = path.resolve(__dirname, "..", "www");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json"
};

const LIVE_CACHE_FILE = path.join(__dirname, "live-football-cache.json");
const LIVE_REFRESH_MS = 24 * 60 * 60 * 1000;
const API_BASE = "https://v3.football.api-sports.io";
const PLAYER_API_NAMES = {
  "كريستيانو رونالدو": "Cristiano Ronaldo",
  "ليونيل ميسي": "Lionel Messi",
  "نيمار": "Neymar",
  "زلاتان إبراهيموفيتش": "Zlatan Ibrahimovic",
  "ساديو ماني": "Sadio Mane",
  "روبرت ليفاندوفسكي": "Robert Lewandowski",
  "محمد صلاح": "Mohamed Salah",
  "كيليان مبابي": "Kylian Mbappe",
  "إيرلينغ هالاند": "Erling Haaland",
  "جود بيلينغهام": "Jude Bellingham",
  "فينيسيوس جونيور": "Vinicius Junior",
  "هاري كين": "Harry Kane",
  "كريم بنزيما": "Karim Benzema",
  "أندريس إنييستا": "Andres Iniesta",
  "تشافي هيرنانديز": "Xavi",
  "جيانلويجي بوفون": "Gianluigi Buffon",
  "واين روني": "Wayne Rooney",
  "ديفيد بيكهام": "David Beckham",
  "جيرارد بيكيه": "Gerard Pique",
  "توني كروس": "Toni Kroos",
  "غاريث بيل": "Gareth Bale",
  "سيرخيو أغويرو": "Sergio Aguero",
  "ديفيد سيلفا": "David Silva",
  "رونالدينيو": "Ronaldinho",
  "فرانشيسكو توتي": "Francesco Totti",
  "تييري هنري": "Thierry Henry"
};
let liveCache = { source: "API-Football", updatedAt: null, players: [], lastError: null };
let refreshPromise = null;
try {
  if (fs.existsSync(LIVE_CACHE_FILE)) liveCache = { ...liveCache, ...JSON.parse(fs.readFileSync(LIVE_CACHE_FILE, "utf8")) };
} catch (e) { console.warn("Could not read live football cache:", e.message); }

const sendJson = (res, status, data) => {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Refresh-Secret"
  });
  res.end(JSON.stringify(data));
};
const normalizeName = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
async function apiFootball(pathname) {
  const key = process.env.FOOTBALL_API_KEY;
  if (!key) throw new Error("FOOTBALL_API_KEY is not configured");
  const response = await fetch(API_BASE + pathname, {
    headers: { "x-apisports-key": key },
    signal: AbortSignal.timeout(18000)
  });
  if (!response.ok) throw new Error("API-Football HTTP " + response.status);
  const body = await response.json();
  if (body.errors && Object.keys(body.errors).length) throw new Error(JSON.stringify(body.errors));
  return Array.isArray(body.response) ? body.response : [];
}
async function refreshLiveFootball(force = false) {
  if (refreshPromise) return refreshPromise;
  if (!process.env.FOOTBALL_API_KEY) throw new Error("أضف FOOTBALL_API_KEY إلى متغيرات بيئة السيرفر أولاً.");
  if (!force && liveCache.updatedAt && Date.now() - Date.parse(liveCache.updatedAt) < LIVE_REFRESH_MS) return liveCache;
  refreshPromise = (async () => {
    const players = [];
    const entries = Object.entries(PLAYER_API_NAMES);
    // Two API calls per tracked player (profile lookup + transfer history).
    // Run sequentially to respect provider quotas and avoid bursts.
    for (const [arabicName, apiName] of entries) {
      try {
        const search = await apiFootball("/players?search=" + encodeURIComponent(apiName));
        if (!search.length) continue;
        const wanted = normalizeName(apiName);
        const match = search.find(x => normalizeName(x.player?.name) === wanted) || (search.length === 1 ? search[0] : null);
        if (!match?.player?.id) continue;
        const transferRows = await apiFootball("/transfers?player=" + encodeURIComponent(match.player.id));
        const rawTransfers = transferRows.flatMap(x => Array.isArray(x.transfers) ? x.transfers : []);
        rawTransfers.sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
        const path = [];
        for (const transfer of rawTransfers) {
          const from = transfer.teams?.out?.name;
          const to = transfer.teams?.in?.name;
          if (from && (!path.length || path[path.length - 1] !== from)) path.push(from);
          if (to && path[path.length - 1] !== to) path.push(to);
        }
        const latest = rawTransfers[rawTransfers.length - 1];
        // Prefer the latest team represented in player statistics; use the latest transfer
        // destination only as a fallback (for example, during the off-season).
        let currentClub = null;
        if (Array.isArray(match.statistics) && match.statistics.length) {
          const stats = match.statistics.slice().sort((a, b) => Number(b.league?.season || 0) - Number(a.league?.season || 0));
          currentClub = stats[0]?.team?.name || null;
        }
        if (!currentClub) currentClub = latest?.teams?.in?.name || null;
        if (!currentClub) continue;
        if (path.length && path[path.length - 1] !== currentClub) path.push(currentClub);
        players.push({
          name: arabicName,
          apiName,
          currentClub,
          path: path.length > 1 ? path : [],
          latestTransfer: latest ? {
            date: latest.date || null,
            from: latest.teams?.out?.name || null,
            to: latest.teams?.in?.name || null
          } : null,
          updatedAt: new Date().toISOString()
        });
      } catch (error) {
        console.warn("Live football refresh failed for " + apiName + ": " + error.message);
      }
    }
    if (!players.length) throw new Error("لم يرجع مصدر البيانات أي معلومات صالحة؛ تم الاحتفاظ بآخر نسخة محفوظة.");
    liveCache = { source: "API-Football", updatedAt: new Date().toISOString(), players, lastError: null };
    fs.writeFileSync(LIVE_CACHE_FILE, JSON.stringify(liveCache, null, 2));
    return liveCache;
  })().catch(error => {
    liveCache.lastError = error.message;
    try { fs.writeFileSync(LIVE_CACHE_FILE, JSON.stringify(liveCache, null, 2)); } catch (_) {}
    throw error;
  }).finally(() => { refreshPromise = null; });
  return refreshPromise;
}

const srv = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS" && req.url.startsWith("/api/")) return sendJson(res, 204, {});
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("ok");
  }
  if (req.method === "GET" && req.url.startsWith("/api/live-football")) {
    const statusOnly = req.url.startsWith("/api/live-football/status");
    if (!liveCache.updatedAt && process.env.FOOTBALL_API_KEY) refreshLiveFootball(false).catch(e => console.warn(e.message));
    const payload = statusOnly
      ? { configured: !!process.env.FOOTBALL_API_KEY, source: liveCache.source, updatedAt: liveCache.updatedAt, playersUpdated: liveCache.players.length, lastError: liveCache.lastError }
      : liveCache;
    return sendJson(res, 200, payload);
  }
  if (req.method === "POST" && req.url === "/api/refresh-live-football") {
    const expected = process.env.CRON_SECRET;
    if (!expected || req.headers["x-refresh-secret"] !== expected) return sendJson(res, 401, { error: "Unauthorized" });
    if (!process.env.FOOTBALL_API_KEY) return sendJson(res, 503, { ok: false, error: "FOOTBALL_API_KEY is not configured" });
    refreshLiveFootball(true).catch(error => console.warn("Triggered live refresh:", error.message));
    return sendJson(res, 202, { ok: true, started: true, message: "تم بدء تحديث بيانات كرة القدم في الخلفية.", updatedAt: liveCache.updatedAt, playersUpdated: liveCache.players.length });
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400);
    return res.end("Bad Request");
  }

  if (pathname === "/") pathname = "/index.html";
  const filePath = path.resolve(WEB_ROOT, "." + pathname);

  if (!filePath.startsWith(WEB_ROOT + path.sep) && filePath !== path.join(WEB_ROOT, "index.html")) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not Found");
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "public, max-age=300"
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

// Best-effort refresh while the web service is awake. The GitHub Actions cron below
// also calls the protected endpoint once per day, so sleeping hosts can still refresh.
setTimeout(() => refreshLiveFootball(false).catch(e => console.warn("Initial live refresh:", e.message)), 2500);
setInterval(() => refreshLiveFootball(false).catch(e => console.warn("Scheduled live refresh:", e.message)), LIVE_REFRESH_MS);

const wss = new WebSocketServer({ server: srv, maxPayload: 20000 });
const rooms = new Map();
let nid = 1;
const code = () => {
  let c;
  do { c = Math.random().toString(36).slice(2, 7).toUpperCase(); }
  while (rooms.has(c));
  return c;
};
const snd = (w, o) => {
  if (w && w.readyState === 1) w.send(JSON.stringify(o));
};

wss.on("connection", ws => {
  ws.on("message", raw => {
    let m;
    try { m = JSON.parse(raw); } catch { return; }

    if (m.t === "create" && !ws.room) {
      const c = code();
      rooms.set(c, { host: ws, g: new Map(), last: null });
      ws.room = c;
      ws.role = "h";
      snd(ws, { t: "created", code: c });
    } else if (m.t === "join" && !ws.room) {
      const c = String(m.code || "").toUpperCase();
      const r = rooms.get(c);
      if (!r) return snd(ws, { t: "err", m: "الغرفة غير موجودة" });
      if (r.g.size >= 50) return snd(ws, { t: "err", m: "الغرفة ممتلئة" });
      ws.room = c;
      ws.role = "g";
      ws.id = "u" + nid++;
      ws.name = String(m.name || "لاعب").slice(0, 20);
      r.g.set(ws.id, ws);
      snd(ws, { t: "joined", code: c });
      snd(r.host, { t: "peer", on: true, id: ws.id, name: ws.name });
      if (r.last) snd(ws, { t: "d", d: r.last });
    } else if (m.t === "bc" && ws.role === "h") {
      const r = rooms.get(ws.room);
      if (r) {
        r.last = m.d;
        r.g.forEach(g => snd(g, { t: "d", d: m.d }));
      }
    } else if (m.t === "buzz" && ws.role === "g") {
      const r = rooms.get(ws.room);
      if (r) snd(r.host, { t: "buzz", id: ws.id });
    }
  });

  ws.on("close", () => {
    const r = rooms.get(ws.room);
    if (!r) return;
    if (ws.role === "h") {
      r.g.forEach(g => snd(g, { t: "end" }));
      rooms.delete(ws.room);
    } else {
      r.g.delete(ws.id);
      snd(r.host, { t: "peer", on: false, id: ws.id });
    }
  });
});

srv.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log("Football Challenge server listening on port " + (process.env.PORT || 8080));
});
