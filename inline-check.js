
const DEF={
 cfg:{rounds:3,p:1,tp:1,g:1,t:1,diff:"x"},
 names:[],
 p:[
  {d:"m",n:"ليونيل ميسي",c:["أرجنتيني، يلعب رقم 10","لعب لبرشلونة وباريس سان جيرمان","قاد بلاده للفوز بكأس العالم 2022"]},
  {d:"m",n:"كريستيانو رونالدو",c:["برتغالي، مهاجم","لعب لمانشستر يونايتد وريال مدريد ويوفنتوس","الهداف التاريخي لدوري أبطال أوروبا"]},
  {d:"m",n:"محمد صلاح",c:["مصري، جناح أيمن","لعب لروما وتشيلسي","نجم ليفربول"]},
  {d:"m",n:"كيليان مبابي",c:["فرنسي، سريع جداً","بدأ مع موناكو","انضم إلى ريال مدريد عام 2024"]},
  {d:"m",n:"إيرلينغ هالاند",c:["نرويجي، مهاجم ضخم","لعب لبروسيا دورتموند","هداف مانشستر سيتي"]},
  {d:"h",n:"فيرجيل فان دايك",c:["هولندي، مدافع","لعب لسلتيك وساوثهامبتون","قائد ليفربول"]},
  {d:"h",n:"كريم بنزيما",c:["فرنسي، مهاجم","قضى سنوات طويلة في ريال مدريد","فاز بالكرة الذهبية 2022"]},
  {d:"h",n:"أندريس إنييستا",c:["إسباني، وسط","قضى معظم مسيرته في برشلونة","سجل هدف نهائي كأس العالم 2010"]}
 ],
 tp:[
  {d:"m",n:"كريستيانو رونالدو",status:"active",pos:"مهاجم",path:["سبورتينغ لشبونة","مانشستر يونايتد","ريال مدريد","يوفنتوس","مانشستر يونايتد","النصر"]},
  {d:"m",n:"ليونيل ميسي",status:"active",pos:"مهاجم",path:["برشلونة","باريس سان جيرمان","إنتر ميامي"]},
  {d:"m",n:"نيمار",status:"active",pos:"مهاجم",path:["سانتوس","برشلونة","باريس سان جيرمان","الهلال","سانتوس"]},
  {d:"h",n:"زلاتان إبراهيموفيتش",status:"retired",pos:"مهاجم",path:["مالمو","أياكس","يوفنتوس","إنتر ميلان","برشلونة","ميلان","باريس سان جيرمان","مانشستر يونايتد","لوس أنجلوس غالاكسي","ميلان"]},
  {d:"h",n:"ساديو ماني",status:"active",pos:"مهاجم",path:["ميتز","ريد بول سالزبورغ","ساوثهامبتون","ليفربول","بايرن ميونخ","النصر"]},
  {d:"h",n:"روبرت ليفاندوفسكي",status:"active",pos:"مهاجم",path:["ليخ بوزنان","بروسيا دورتموند","بايرن ميونخ","برشلونة"]},
  {d:"m",n:"محمد صلاح",status:"active",pos:"مهاجم",path:["بازل","تشيلسي","فيورنتينا","روما","ليفربول","طرابزون سبور"]},
  {d:"m",n:"كيليان مبابي",status:"active",pos:"مهاجم",path:["موناكو","باريس سان جيرمان","ريال مدريد"]},
  {d:"h",n:"إيرلينغ هالاند",status:"active",pos:"مهاجم",path:["براينه","مولده","ريد بول سالزبورغ","بروسيا دورتموند","مانشستر سيتي"]},
  {d:"h",n:"جود بيلينغهام",status:"active",pos:"وسط",path:["برمنغهام سيتي","بروسيا دورتموند","ريال مدريد"]},
  {d:"h",n:"فينيسيوس جونيور",status:"active",pos:"مهاجم",path:["فلامنغو","ريال مدريد"]},
  {d:"h",n:"هاري كين",status:"active",pos:"مهاجم",path:["ليتون أورينت","ميلوول","نوريتش سيتي","ليستر سيتي","توتنهام هوتسبير","بايرن ميونخ"]},
  {d:"h",n:"كريم بنزيما",status:"active",pos:"مهاجم",path:["ليون","ريال مدريد","الاتحاد","الهلال"]},
  {d:"h",n:"أندريس إنييستا",status:"retired",pos:"وسط",path:["برشلونة","فيسيل كوبي","الإمارات"]},
  {d:"h",n:"تشافي هيرنانديز",status:"retired",pos:"وسط",path:["برشلونة","السد"]},
  {d:"h",n:"جيانلويجي بوفون",status:"retired",pos:"حارس مرمى",path:["بارما","يوفنتوس","باريس سان جيرمان","يوفنتوس","بارما"]},
  {d:"h",n:"واين روني",status:"retired",pos:"مهاجم",path:["إيفرتون","مانشستر يونايتد","إيفرتون","دي سي يونايتد","ديربي كاونتي"]},
  {d:"h",n:"ديفيد بيكهام",status:"retired",pos:"وسط",path:["مانشستر يونايتد","ريال مدريد","لوس أنجلوس غالاكسي","ميلان","باريس سان جيرمان"]},
  {d:"h",n:"جيرارد بيكيه",status:"retired",pos:"مدافع",path:["مانشستر يونايتد","ريال سرقسطة","برشلونة"]},
  {d:"h",n:"توني كروس",status:"retired",pos:"وسط",path:["بايرن ميونخ","باير ليفركوزن","بايرن ميونخ","ريال مدريد"]},
  {d:"h",n:"غاريث بيل",status:"retired",pos:"مهاجم",path:["ساوثهامبتون","توتنهام هوتسبير","ريال مدريد","توتنهام هوتسبير","لوس أنجلوس إف سي"]},
  {d:"h",n:"سيرخيو أغويرو",status:"retired",pos:"مهاجم",path:["إنديبندينتي","أتلتيكو مدريد","مانشستر سيتي","برشلونة"]},
  {d:"h",n:"ديفيد سيلفا",status:"retired",pos:"وسط",path:["فالنسيا","مانشستر سيتي","ريال سوسيداد"]},
  {d:"h",n:"رونالدينيو",status:"retired",pos:"مهاجم",path:["باريس سان جيرمان","برشلونة","ميلان","فلامنغو","أتلتيكو مينيرو","كويريتارو","فلومينينسي"]},
  {d:"h",n:"فرانشيسكو توتي",status:"retired",pos:"مهاجم",path:["روما"]},
  {d:"h",n:"تييري هنري",status:"retired",pos:"مهاجم",path:["موناكو","يوفنتوس","أرسنال","برشلونة","نيويورك ريد بولز","أرسنال"]}
 ],
 g:[
  {d:"m",q:"من فاز بكأس العالم 2022؟",a:"الأرجنتين",opts:["الأرجنتين","فرنسا","كرواتيا","المغرب"]},
  {d:"m",q:"أي دولة استضافت كأس العالم 2018؟",a:"روسيا",opts:["روسيا","قطر","البرازيل","جنوب أفريقيا"]},
  {d:"m",q:"أكثر نادٍ فوزاً بدوري أبطال أوروبا؟",a:"ريال مدريد",opts:["ريال مدريد","ميلان","بايرن ميونخ","ليفربول"]},
  {d:"m",q:"أكثر منتخب فوزاً بكأس العالم؟",a:"البرازيل (5 مرات)",opts:["البرازيل (5 مرات)","ألمانيا (4 مرات)","إيطاليا (4 مرات)","الأرجنتين (3 مرات)"]},
  {d:"h",q:"من هو الهداف التاريخي لكأس العالم؟",a:"ميروسلاف كلوزه (16 هدفاً)",opts:["ميروسلاف كلوزه (16 هدفاً)","رونالدو نازاريو (15 هدفاً)","غيرد مولر (14 هدفاً)","جاست فونتين (13 هدفاً)"]},
  {d:"h",q:"من فاز بكأس العالم 2010؟",a:"إسبانيا",opts:["إسبانيا","هولندا","ألمانيا","البرازيل"]},
  {d:"h",q:"أي منتخب فاز ببطولة أمم أوروبا 2004؟",a:"اليونان",opts:["اليونان","البرتغال","التشيك","هولندا"]},
  {d:"h",q:"في أي عام أقيمت أول بطولة كأس عالم، وأين؟",a:"1930 في الأوروغواي",opts:["1930 في الأوروغواي","1934 في إيطاليا","1938 في فرنسا","1950 في البرازيل"]}
 ],
 t:[
  {d:"m",q:"إلى أي نادٍ انتقل رونالدو عام 2018 قادماً من ريال مدريد؟",a:"يوفنتوس"},
  {d:"m",q:"من أي نادٍ انتقل ميسي إلى باريس سان جيرمان عام 2021؟",a:"برشلونة"},
  {d:"m",q:"من أي نادٍ انتقل صلاح إلى ليفربول عام 2017؟",a:"روما"},
  {d:"m",q:"من أي نادٍ انتقل هازارد إلى ريال مدريد عام 2019؟",a:"تشيلسي"},
  {d:"h",q:"من أي نادٍ انتقل فان دايك إلى ليفربول؟",a:"ساوثهامبتون"},
  {d:"h",q:"إلى أي نادٍ انتقل ساديو ماني من ليفربول عام 2022؟",a:"بايرن ميونخ"},
  {d:"h",q:"من أي نادٍ انتقل غريزمان إلى برشلونة عام 2019؟",a:"أتلتيكو مدريد"},
  {d:"h",q:"من أي نادٍ انتقل كوتينيو إلى برشلونة عام 2018؟",a:"ليفربول"},
  {d:"h",q:"كم بلغت قيمة صفقة نيمار إلى باريس عام 2017؟",a:"222 مليون يورو"}
 ]};
const K="fbq2",clone=o=>JSON.parse(JSON.stringify(o));
let D=null;try{D=JSON.parse(localStorage.getItem(K)||"null")}catch(e){}
D=D||clone(DEF);
// تحديث بيانات مسارات اللاعبين القديمة وإضافة اللاعبين الجدد دون حذف إضافات المستخدم.
const SEEDED_TRANSFER_PLAYERS=clone(DEF.tp);
D.tp=Array.isArray(D.tp)?D.tp:[];
for(const player of SEEDED_TRANSFER_PLAYERS){
 const i=D.tp.findIndex(x=>x.n===player.n);
 if(i<0)D.tp.push(player);else D.tp[i]={...D.tp[i],...player};
}
// Keep the legacy general questions' options in the same answer family as each question.
for(const seeded of DEF.g){
 const i=D.g.findIndex(x=>x.q===seeded.q);
 if(i<0)D.g.push(clone(seeded));else D.g[i]={...D.g[i],...seeded};
}
const save=()=>{try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}};
const $=document.getElementById("app");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sh=a=>a.map(x=>[Math.random(),x]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const LBL={p:"من هو اللاعب؟",tp:"لاعب من انتقالاته",g:"من بنك 2000 سؤال",t:"سؤال انتقالات"};
const QUESTION_BANK=Array.isArray(window.QUESTION_BANK)?window.QUESTION_BANK:[];
const QUESTION_HISTORY_KEY="fbq_seen_v1";
const questionKey=(k,d)=>`${k}:${String(d.id||d.q||d.n||"")}`;
function getSeen(){try{return new Set(JSON.parse(localStorage.getItem(QUESTION_HISTORY_KEY)||"[]"))}catch(e){return new Set()}}
function setSeen(s){try{localStorage.setItem(QUESTION_HISTORY_KEY,JSON.stringify([...s].slice(-2500)))}catch(e){}}
let G=null,GV=null,NET=null,tab="g",BZ="",MYN="",PLAYMODE="ffa",TEAMDATA=[{name:"الفريق الأول",members:["",""]},{name:"الفريق الثاني",members:["",""]}];
// Use the same Render host automatically in the browser; use the deployed
// Render URL when running inside the Android Capacitor app.
const DEFAULT_SERVER = (location.hostname && location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && !location.hostname.endsWith(".local"))
  ? ((location.protocol === "https:" ? "wss://" : "ws://") + location.host)
  : "wss://football-0kb6.onrender.com";
let SRV=DEFAULT_SERVER;
try{MYN=localStorage.getItem("fbme")||""}catch(e){}
const send=o=>{if(NET&&NET.ws.readyState===1)NET.ws.send(JSON.stringify(o))};
const cur=()=>G.rounds[G.r][G.i];
function leave(){if(NET){NET.closed=true;try{NET.ws.close()}catch(e){}}NET=null;G=null;GV=null}
function home(){leave();
 $.innerHTML=`<div class="brand"><img src="logo.png" alt="تحدي كرة القدم"><h1>تحدي كرة القدم</h1></div>
 <button class="pri big" onclick="setup()">🎮 أوفلاين (على نفس الجهاز)</button>
 <button class="big" onclick="onl()">🌐 أونلاين</button>
 <button class="w" onclick="editor()">إضافة أسئلة ولاعبين</button>
 <button class="lnk w" onclick="if(confirm('استعادة البيانات الافتراضية؟')){const n=D.names;D=clone(DEF);D.names=n;save();home()}">استعادة الافتراضي</button>`;
}
/* ---------- أونلاين ---------- */
function st(t){const e=document.getElementById("st");if(e)e.textContent=t}
function onl(){leave();
 $.innerHTML=`<h1>🌐 أونلاين</h1><div class="card"><h2>الاتصال</h2>
 <small>السيرفر متصل تلقائياً — لا تحتاج لإدخال رابطه.</small>
 <input class="in" id="on" placeholder="اسمك (للانضمام)" value="${esc(MYN)}">
 <button class="pri" style="margin-top:8px" onclick="conn(()=>send({t:'create'}),true)">إنشاء غرفة (أنا المضيف)</button>
 <div class="row"><input id="cd" placeholder="رمز الغرفة" maxlength="5" style="text-transform:uppercase"><button onclick="joinRoom()">انضمام</button></div>
 <small id="st"></small></div><button class="w" onclick="home()">رجوع</button>`;
}
function joinRoom(){
 const c=document.getElementById("cd").value.trim().toUpperCase(),n=document.getElementById("on").value.trim();
 if(!n)return st("أدخل اسمك");if(!c)return st("أدخل رمز الغرفة");
 conn(()=>send({t:"join",code:c,name:n}),false);
}
function conn(cb,h){
 SRV=DEFAULT_SERVER;MYN=document.getElementById("on").value.trim();
 try{localStorage.setItem("fbme",MYN)}catch(e){}
 if(!/^wss?:\/\/.+/.test(SRV))return st("تعذر تحديد عنوان السيرفر تلقائياً");
 let ws;try{ws=new WebSocket(SRV)}catch(e){return st("رابط غير صالح")}
 st("جارٍ الاتصال...");NET={ws,host:!!h,code:"",peers:[]};
 ws.onopen=cb;
 ws.onmessage=e=>{let m;try{m=JSON.parse(e.data)}catch(x){return}onMsg(m)};
 ws.onclose=()=>{if(!NET||NET.ws!==ws||NET.closed)return;const had=NET.code;NET=null;had?lost("انقطع الاتصال بالسيرفر"):st("تعذر الاتصال بالسيرفر، تحقق من الرابط")};
}
function lost(m){leave();$.innerHTML=`<h1>🌐 أونلاين</h1><div class="card"><p>${esc(m)}</p></div><button class="pri" onclick="home()">القائمة الرئيسية</button>`}
function wait(m){$.innerHTML=`<h1>🌐 الغرفة ${esc(NET.code)}</h1><div class="card"><p>${m}</p></div><button class="w" onclick="home()">خروج</button>`}
function onMsg(m){
 if(!NET)return;
 if(m.t==="created"){NET.code=m.code;setup()}
 else if(m.t==="joined"){NET.code=m.code;wait("تم الانضمام. بانتظار بدء المضيف...")}
 else if(m.t==="err"){st(m.m);NET.closed=true;try{NET.ws.close()}catch(e){}NET=null}
 else if(m.t==="end")lost("أنهى المضيف الغرفة")
 else if(m.t==="d"&&!NET.host){GV=m.d;draw(GV,false)}
 else if(m.t==="peer"&&NET.host){
  NET.peers=NET.peers.filter(p=>p.id!==m.id);
  if(m.on)NET.peers.push({id:m.id,name:m.name});
  if(!G)setup();else paint();
 }
 else if(m.t==="buzz"&&NET.host&&G&&G.r<G.rounds.length&&!cur().rev&&G.C.some(c=>c.id===m.id)&&!G.buzz.includes(m.id)){G.buzz.push(m.id);paint()}
}
/* ---------- الإعدادات ---------- */
function setup(){
 const c=D.cfg,on=NET&&NET.host,L=[["rounds","عدد الجولات"],["p","من هو اللاعب؟ (تلميحات) في كل جولة"],["tp","لاعب من انتقالاته في كل جولة"],["g","أسئلة عامة في كل جولة"],["t","أسئلة انتقالات في كل جولة"]];
 const isLocal=!on;
 const modeUI=isLocal?`<div class="card"><h2>اختر نمط اللعب</h2><div class="tabs">
 <button class="${PLAYMODE==='ffa'?'on':''}" onclick="PLAYMODE='ffa';setup()">واحد ضد واحد</button>
 <button class="${PLAYMODE==='teams'?'on':''}" onclick="PLAYMODE='teams';setup()">تيم ضد تيم</button>
 <button class="${PLAYMODE==='solo'?'on':''}" onclick="PLAYMODE='solo';setup()">تحدّى معلوماتك</button></div></div>`:"";
 let participants="";
 if(isLocal&&PLAYMODE==='teams') participants=`<div class="card"><h2>إنشاء الفرق</h2>${TEAMDATA.map((t,i)=>`<h3>${i===0?'الفريق الأول':'الفريق الثاني'}</h3><input class="in" id="tn${i}" maxlength="24" placeholder="اسم التيم" value="${esc(t.name)}"><small>أسماء الأعضاء (حد أقصى 4 أعضاء)</small>${[0,1,2,3].map(j=>`<input class="in" id="tm${i}_${j}" maxlength="20" placeholder="اسم العضو ${j+1}" value="${esc(t.members[j]||'')}">`).join('')}`).join('')}</div>`;
 else if(isLocal&&PLAYMODE==='solo') participants=`<div class="card"><h2>تحدّى معلوماتك</h2><input id="soloName" maxlength="20" placeholder="اسم اللاعب" value="${esc(D.names[0]||'')}" /></div>`;
 else if(isLocal) participants=`<div class="card"><h2>المتنافسان</h2><div class="row"><input id="p1" maxlength="20" placeholder="اسم المتنافس الأول" value="${esc(D.names[0]||'')}" /></div><div class="row"><input id="p2" maxlength="20" placeholder="اسم المتنافس الثاني" value="${esc(D.names[1]||'')}" /></div></div>`;
 else participants=`<div class="card"><h2>لاعبون على هذا الجهاز</h2><div class="chips">${D.names.map((n,i)=>`<span class="chip">${esc(n)} <a onclick="delName(${i})" style="cursor:pointer">✕</a></span>`).join("")||"<small>لا أحد بعد</small>"}</div><div class="row"><input id="nm" placeholder="اسم لاعب" onkeydown="if(event.key==='Enter')addName()"><button onclick="addName()">إضافة</button></div></div>`;
 $.innerHTML=`<h1>${on?"غرفة أونلاين":"اللعب"}</h1>
 ${on?`<div class="card"><h2>رمز الغرفة: <span style="letter-spacing:3px;color:var(--pri)">${esc(NET.code)}</span></h2><div class="chips">${NET.peers.map(p=>`<span class="chip">🌐 ${esc(p.name)}</span>`).join("")||"<small>بانتظار انضمام لاعبين...</small>"}</div><small>يدخل اللاعبون الرمز من هواتفهم. ويمكن للاعبين على جهازك المشاركة أيضاً.</small></div>`:""}
 ${modeUI}${participants}
 <div class="card"><h2>الإعدادات</h2>${L.map(([k,t])=>`<div class="row"><span>${t}</span><input type="number" min="0" max="20" value="${c[k]}" onchange="D.cfg.${k}=Math.max(0,+this.value);save()"></div>`).join("")}
 <div class="row"><span>مستوى الصعوبة</span><select style="width:130px" onchange="D.cfg.diff=this.value;save()">${[["x","متوسط + صعب جداً"],["m","متوسط"],["h","صعب جداً"]].map(([v,t])=>`<option value="${v}" ${c.diff===v?"selected":""}>${t}</option>`).join("")}</select></div>
 <small>بنك الأسئلة: ${QUESTION_BANK.length.toLocaleString("ar-EG")} سؤالاً (1000 متوسط + 1000 صعب جداً). يمكن استخدام حتى 100 سؤال في المباراة. لا يتكرر السؤال داخل المباراة أو في المباريات التالية؛ وعند نفاد الأسئلة الجديدة لن يعاد سؤال مستخدم.</small></div>
 <button class="pri" onclick="start()">ابدأ اللعب</button><button class="w" onclick="home()">رجوع</button>`;
}
function addName(){const v=document.getElementById("nm").value.trim();if(v&&D.names.length<12){D.names.push(v);save()}setup()}
function delName(i){D.names.splice(i,1);save();setup()}
/* ---------- اللعب ---------- */
function start(){
 let C=[];
 if(NET&&NET.host){C=D.names.map(n=>({n,id:null})).concat(NET.peers.map(p=>({n:p.name,id:p.id})));}
 else if(PLAYMODE==='teams'){
  for(let i=0;i<2;i++){
   const name=document.getElementById('tn'+i).value.trim();
   const members=[0,1,2,3].map(j=>document.getElementById(`tm${i}_${j}`).value.trim()).filter(Boolean);
   if(!name||!members.length){alert('أدخل اسم كل فريق واسم عضو واحد على الأقل');return}
   if(members.length>4){alert('الحد الأقصى لكل فريق 4 أعضاء');return}
   TEAMDATA[i]={name,members};C.push({n:name, members, id:null, team:true});
  }
 }else if(PLAYMODE==='solo'){
  const n=document.getElementById('soloName').value.trim();if(!n){alert('أدخل اسم اللاعب');return}C=[{n,id:null,solo:true}];D.names=[n];save();
 }else{
  const a=document.getElementById('p1').value.trim(),b=document.getElementById('p2').value.trim();
  if(!a||!b){alert('أدخل اسم المتنافسين');return}C=[{n:a,id:null},{n:b,id:null}];D.names=[a,b];save();
 }
 if(!C.length){alert('أضف لاعباً واحداً على الأقل');return}
 const c=D.cfg,st={},rounds=[],seen=getSeen(),usedNow=[];
 const source=k=>k==="g"?D.g.concat(QUESTION_BANK):D[k];
 const kinds=["p","tp","g","t"],MAX_MATCH_QUESTIONS=100;
 const queues={};
 let requested=0;
 for(const k of kinds){
  const all=source(k).filter(x=>(x.d==="m"||x.d==="h")&&(c.diff==="x"||x.d===c.diff));
  const unique=[],local=new Set();
  for(const x of all){const key=questionKey(k,x);if(!local.has(key)&&!seen.has(key)){local.add(key);unique.push(x);}}
  queues[k]=sh(unique);
  requested+=Math.max(0,c.rounds*c[k]);
 }
 // A match can use up to 100 distinct questions. Never recycle an already-used
 // question to satisfy a category quota; use the remaining fresh questions instead.
 const target=Math.min(MAX_MATCH_QUESTIONS,requested);
 const selected=[];
 for(const k of kinds){
  const need=Math.max(0,c.rounds*c[k]);
  for(let i=0;i<need&&selected.length<target&&queues[k].length;i++)selected.push({t:k,d:queues[k].pop()});
 }
 if(selected.length<target){
  const fallback=sh(kinds.flatMap(k=>queues[k].map(d=>({t:k,d}))));
  for(const item of fallback){if(selected.length>=target)break;selected.push(item);}
 }
 if(!selected.length){alert('لا توجد أسئلة جديدة متاحة. أضف أسئلة جديدة إلى البنك لمتابعة اللعب دون تكرار.');return;}
 const answerOf=(k,d)=>k==="p"||k==="tp"?d.n:d.a;
 const playerRole=(player)=>{
  const text=[player.pos||"",...(player.c||[]),player.n||""].join(" ");
  if(/حارس|goalkeeper/i.test(text))return "حارس مرمى";
  if(/مدافع|ظهير|قلب دفاع|defender|back/i.test(text))return "مدافع";
  if(/وسط|محور|صانع ألعاب|midfielder/i.test(text))return "وسط";
  if(/مهاجم|جناح|رأس حربة|forward|striker|winger/i.test(text))return "مهاجم";
  return "غير محدد";
 };
 const ROLE_DISTRACTORS={
  "مدافع":["فيرجيل فان دايك","جيرارد بيكيه","سيرخيو راموس","كارليس بويول","فابيو كانافارو","باولو مالديني","أليساندرو نيستا","ريو فرديناند","جون تيري","تياغو سيلفا","مارسيلو","داني ألفيش"],
  "وسط":["تشافي هيرنانديز","أندريس إنييستا","توني كروس","لوكا مودريتش","كيفن دي بروين","سيرجيو بوسكيتس","ستيفن جيرارد","فرانك لامبارد","أندريا بيرلو","بول سكولز"],
  "مهاجم":["ليونيل ميسي","كريستيانو رونالدو","محمد صلاح","كيليان مبابي","إيرلينغ هالاند","نيمار","لويس سواريز","روبرت ليفاندوفسكي","كريم بنزيما","تييري هنري"],
  "حارس مرمى":["جيانلويجي بوفون","إيكر كاسياس","مانويل نوير","بيتر شمايكل","أوليفر كان","تيبو كورتوا","أليسون بيكر","إدوين فان دير سار"]
 };
 const optionsFor=(k,d)=>{
  const correct=answerOf(k,d);let pool=[];
  if(k==="p"){
   const role=playerRole(d);
   const sameRole=[...D.p,...D.tp].filter(x=>x.n!==d.n&&playerRole(x)===role).map(x=>x.n);
   pool=role!=="غير محدد"?sameRole.concat(ROLE_DISTRACTORS[role]||[]):D.p.filter(x=>x.n!==d.n).map(x=>x.n);
  }else if(k==="tp"){
   const target=D.tp.find(x=>x.n===d.n)||d,role=playerRole(target);
   pool=D.tp.filter(x=>x.n!==correct&&playerRole(x)===role).map(x=>x.n);
   if(role!=="غير محدد")pool=pool.concat(ROLE_DISTRACTORS[role]||[]);
   else pool=D.tp.filter(x=>x.n!==correct).map(x=>x.n);
  }else if(k==="t"){
   const isFee=/مليون|€|دولار|جنيه/.test(String(correct));
   pool=isFee?D.t.map(x=>x.a).filter(x=>/مليون|€|دولار|جنيه/.test(String(x))).concat(["180 مليون يورو","150 مليون يورو","105 مليون يورو","90 مليون يورو","75 مليون يورو","60 مليون يورو"]):D.tp.flatMap(x=>x.path||[]).concat(D.t.map(x=>x.a).filter(x=>!(/مليون|€|دولار|جنيه/.test(String(x)))));
  }else if(k==="g"&&d.category){pool=QUESTION_BANK.filter(x=>x.category===d.category&&x.d===d.d).map(x=>x.a)}
  else if(Array.isArray(d.opts))pool=d.opts;
  else pool=source(k).map(x=>answerOf(k,x));
  pool=[...new Set(pool.filter(x=>x&&x!==correct))];
  const distractors=sh(pool).slice(0,3);
  return sh([correct,...distractors]);
 };
 for(const item of selected){
  const d=item.d,k=item.t;usedNow.push(questionKey(k,d));
  const roundIndex=Math.floor((rounds.flat().length)/Math.max(1,Math.ceil(selected.length/Math.max(1,c.rounds))));
  if(!rounds[roundIndex])rounds[roundIndex]=[];
  rounds[roundIndex].push({t:k,d,opts:optionsFor(k,d),cl:1,rev:false,selected:null});
 }
 for(let r=0;r<rounds.length;r++)rounds[r]=sh(rounds[r]);
 usedNow.forEach(k=>seen.add(k));setSeen(seen);
 if(!rounds.flat().length){alert('لا توجد أسئلة جديدة متاحة.');return}
 G={rounds,r:0,i:0,C,sc:C.map(()=>0),buzz:[],gid:Math.random().toString(36).slice(2,6),mode:NET?'online':PLAYMODE};paint();
}
function view(){
 const sc=G.C.map((c,i)=>[c.n,G.sc[i]]);
 if(G.r>=G.rounds.length){const rk=sc.slice().sort((a,b)=>b[1]-a[1]);return{end:true,rk,win:rk.filter(x=>x[1]===rk[0][1]).map(x=>x[0])}}
 const it=cur(),d=it.d,h=d.d==="h";let lines=[],big=null;
 if(it.t==="p")lines=d.c.slice(0,it.cl).map((x,k)=>"تلميح "+(k+1)+": "+x);
 else if(it.t==="tp")lines=[(Array.isArray(d.path)?d.path.join(" ← "):"")+(Array.isArray(d.path)&&d.path.length?" ← ؟":"")];
 else big=d.q;
 const b=G.buzz.map(id=>G.C.findIndex(c=>c.id===id)).filter(i=>i>=0);
 const ord=b.map(i=>[i,1]).concat(G.C.map((c,i)=>i).filter(i=>!b.includes(i)).map(i=>[i,0]));
 const statusTag=it.t==="tp"?(d.status==="retired"?"لاعب معتزل":"لاعب حالي"):null;
 return{mode:G.mode,hd:`الجولة ${G.r+1}/${G.rounds.length} · سؤال ${G.i+1}/${G.rounds[G.r].length}`,k:G.gid+"-"+G.r+"-"+G.i,tags:[LBL[it.t],h?"صعب جداً":"متوسط",statusTag].filter(Boolean),h,lines,big,
  more:(it.t==="p"&&it.cl<d.c.length),rev:it.rev,ans:it.t==="p"||it.t==="tp"?d.n:d.a,opts:it.opts||[],pts:h?2:1,sc,buzz:b.map(i=>G.C[i].n),ord};
}
function paint(){const v=view();draw(v,true);if(NET&&NET.host)send({t:"bc",d:v})}
function draw(v,host){
 if(v.end){$.innerHTML=`<h1>${G&&G.mode==='solo'?"انتهى تحدّي معلوماتك 🏆":"انتهت اللعبة 🏆"}</h1><div class="card"><h2>${v.win.length>1?"تعادل: ":"الفائز: "}${v.win.map(esc).join(" و ")}</h2>${v.rk.map((x,i)=>`<div class="rk"><span>${i+1}. ${esc(x[0])}</span><b>${x[1]}</b></div>`).join("")}</div>${host?`<button class="pri" onclick="start()">العب مجدداً</button><button class="w" onclick="setup()">الإعدادات</button>`:""}<button class="w" onclick="home()">${host?"القائمة الرئيسية":"خروج"}</button>`;return}
 $.innerHTML=`<div class="bar"><span>${esc(v.hd)}</span></div><div class="chips">${v.sc.map((x,i)=>`<span class="chip">${esc(v.teams&&v.teams[i]||x[0])}: ${x[1]}</span>`).join("")}</div>
 <div class="card">${v.tags.map((t,i)=>`<span class="tag ${i&&v.h?"h":""}">${esc(t)}</span>`).join("")}
 ${v.lines.map(x=>`<div class="clue">${esc(x)}</div>`).join("")}${v.big?`<h2 style="margin-top:12px">${esc(v.big)}</h2>`:""}
 ${v.opts&&v.opts.length?`<div class="card" style="padding:10px;margin-top:12px"><b>اختر الإجابة الصحيحة:</b>${v.opts.map((o,i)=>v.mode==='solo'&&!v.rev?`<button class="w" onclick="soloAnswer(${i})">${String.fromCharCode(65+i)}. ${esc(o)}</button>`:`<div class="clue">${String.fromCharCode(65+i)}. ${esc(o)}</div>`).join("")}</div>`:""}
 ${v.buzz.length?`<div class="clue">⚡ ضغطوا بالترتيب: ${v.buzz.map(esc).join("، ")}</div>`:""}
 ${v.rev?`<div class="ans">${esc(v.ans)}${G&&G.mode==='solo'?`<br><small style="color:white">${cur().correct?"إجابة صحيحة +1 نقطة":"إجابة خاطئة: بدون نقاط"}</small>`:""}</div>`:""}${host?hostCtl(v):guestCtl(v)}</div>`;
}
function hostCtl(v){
 if(v.mode==='solo')return v.rev?`<button class="pri" onclick="nextQuestion()">السؤال التالي</button>`:`<small>اختر إجابة واحدة. الصحيحة +1 والخاطئة بدون زيادة أو نقصان.</small>`;
 if(!v.rev)return(v.more?`<button class="w" onclick="more()">تلميح إضافي</button>`:"")+`<button class="pri" style="margin-top:12px" onclick="reveal()">معرفة الجواب</button>`;
 return`<p style="margin:6px 0"><b>لمن النقطة؟</b> (${v.pts===2?"نقطتان":"نقطة"})</p>${v.ord.map(([i,z])=>`<button class="w" onclick="award(${i})">${z?"⚡ ":""}${esc(v.sc[i][0])}</button>`).join("")}<button class="w" style="color:var(--bad)" onclick="award(-1)">لا أحد (إجابة خاطئة)</button>`;
}
function guestCtl(v){
 if(v.rev)return`<small>بانتظار السؤال التالي...</small>`;
 const on=BZ===v.k;return`<button class="pri buzz" style="margin-top:12px" ${on?"disabled":""} onclick="buzz('${esc(v.k)}')">${on?"تم الضغط ✓":"✋ أنا عرفت!"}</button>`;
}
function buzz(k){BZ=k;send({t:"buzz"});draw(GV,false)}
function more(){cur().cl++;paint()}
function reveal(){cur().rev=true;paint()}
function soloAnswer(i){
 if(!G||G.mode!=='solo'||cur().rev)return;
 const it=cur(),correct=it.opts[i]=== (it.t==='p'||it.t==='tp'?it.d.n:it.d.a);
 it.rev=true;it.selected=i;it.correct=correct;if(correct)G.sc[0]+=1;paint();
}
function nextQuestion(){G.i++;if(G.i>=G.rounds[G.r].length){G.r++;G.i=0}paint()}
function award(i){
 if(i>=0)G.sc[i]+=cur().d.d==="h"?2:1;
 G.buzz=[];nextQuestion();
}
/* ---------- المحرر ---------- */
function editor(msg){
 const f=(id,p)=>`<input class="in" id="${id}" placeholder="${p}">`;
 const sel=`<select class="in" id="df"><option value="m">متوسط</option><option value="h">صعب</option></select>`;
 let form="";
 if(tab==="p")form=f("n","اسم اللاعب")+f("c1","التلميح 1 (الأصعب)")+f("c2","التلميح 2")+f("c3","التلميح 3 (الأسهل)");
 else if(tab==="tp")form=f("n","اسم اللاعب")+`<select class="in" id="ps"><option value="active">لاعب حالي</option><option value="retired">لاعب معتزل</option></select>`+`<select class="in" id="pp"><option>مهاجم</option><option>وسط</option><option>مدافع</option><option>حارس مرمى</option></select>`+f("pa","كل الأندية بالترتيب حتى آخر نادٍ، افصل بينها بفاصلة ،");
 else form=f("q","نص السؤال")+f("a","الجواب");
 $.innerHTML=`<h1>إضافة محتوى</h1><div class="tabs">${[["g","عامة"],["t","انتقالات"],["p","لاعب"],["tp","من الانتقالات"]].map(([k,t])=>`<button class="${tab===k?"on":""}" onclick="tab='${k}';editor()">${t}</button>`).join("")}</div>
 <div class="card">${form}${sel}<button class="pri" style="margin-top:8px" onclick="add()">حفظ</button><small>${msg||""}</small><br><small>المحفوظ في هذا القسم: ${D[tab].length}</small></div><button class="w" onclick="home()">رجوع</button>`;
}
function add(){
 const v=id=>document.getElementById(id).value.trim(),d=v("df");
 if(tab==="p"){if(!v("n")||!v("c1"))return editor("أدخل الاسم وتلميحاً واحداً على الأقل");D.p.push({d,n:v("n"),c:[v("c1"),v("c2"),v("c3")].filter(Boolean)})}
 else if(tab==="tp"){const pa=v("pa").split(/[،,]/).map(x=>x.trim()).filter(Boolean);if(!v("n")||pa.length<1)return editor("أدخل الاسم ونادياً واحداً على الأقل");D.tp.push({d,n:v("n"),status:document.getElementById("ps").value,pos:document.getElementById("pp").value,path:pa})}
 else{if(!v("q")||!v("a"))return editor("املأ السؤال والجواب");D[tab].push({d,q:v("q"),a:v("a")})}
 save();editor("تمت الإضافة ✓");
}
home();
