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

const srv = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("ok");
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
