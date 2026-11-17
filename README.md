# تحدي كرة القدم - مشروع APK

## خطوات الحصول على APK
1. أنشئ مستودعاً جديداً على GitHub، وارفع كل محتويات هذا المجلد (بما فيه مجلد .github).
2. ادخل تبويب Actions، واختر Build APK، ثم Run workflow (أو يعمل تلقائياً عند الرفع).
3. بعد دقائق افتح التشغيل المكتمل، ونزّل football-quiz-apk من قسم Artifacts. بداخله app-debug.apk.
4. انقله إلى هاتفك وثبّته (فعّل التثبيت من مصادر غير معروفة).

تعديل اللعبة: عدّل www/index.html ثم ارفعه، وسيُبنى APK جديد.

## تشغيل الأونلاين (سيرفر مجاني)
1. على render.com أنشئ New > Web Service من نفس المستودع، واجعل Root Directory = `server`.
2. Build Command: `npm install` و Start Command: `node server.js` (الخطة المجانية تكفي للتجربة، وأول اتصال قد يتأخر دقيقة).
3. سيعطيك رابطاً مثل `https://اسمك.onrender.com`. اكتبه في اللعبة بصيغة `wss://اسمك.onrender.com`.
4. المضيف يضغط "إنشاء غرفة" ويعطي الرمز للآخرين، وهم يدخلونه من "انضمام".
للتشغيل على جهازك: `cd server && npm install && node server.js` ثم `ws://عنوان-جهازك:8080` (يعمل في المتصفح فقط، أما APK فيحتاج wss).

\n## الشعار وتشغيل واجهة Render
- تم إضافة الشعار إلى `www/logo.png` ليظهر كأيقونة المتصفح، وإلى `assets/` لتوليد أيقونة تطبيق Android وشاشة البداية أثناء بناء APK.
- في Render استخدم Root Directory = `server`، وBuild Command = `npm install`، وStart Command = `node server.js`.
- رابط Render الرئيسي يعرض اللعبة الآن، بينما يبقى اتصال اللعب أونلاين عبر `wss://اسم-الخدمة.onrender.com`.
- فحص حالة السيرفر متاح عبر `/health`.

## Updating the Android app icon

The launcher icon is generated from `assets/icon-only.png`, `assets/icon-foreground.png`, and `assets/icon-background.png` by the GitHub Actions APK workflow. After building a new APK, uninstall the previous app from the phone before installing the new APK if Android continues showing a cached old launcher icon.


## بنك الأسئلة (الإصدار الحالي)
- الملف `www/question-bank.js` يحتوي على 2000 سؤال اختيار من متعدد: 1000 متوسط و1000 صعب جداً.
- كل سؤال يحتوي على أربعة خيارات وإجابة صحيحة واحدة.
- أسئلة البنك تُستخدم في أنماط اللعب المختلفة، وتُخلط عشوائياً. يحفظ التطبيق الأسئلة التي ظهرت محلياً ويتجنب إعادتها حتى استهلاك الأسئلة المتاحة ثم يبدأ دورة جديدة.
- ملاحظة تحريرية: بعض الحقائق التاريخية صيغت بأكثر من طريقة سؤال؛ عدد سجلات الأسئلة 2000، لكن عدد الحقائق الأساسية أقل من 2000. راجع الأسئلة قبل نشر التطبيق تجارياً، خصوصاً أسماء الملاعب التي قد تتغير تسمياتها.

### مراجع التحقق التاريخي
- FIFA، سجل أبطال كأس العالم 1930–1978: https://www.fifa.com/en/tournaments/mens/worldcup/articles/world-cup-champions-1930-1978-uruguay-italy-germany-brazil-england-argentina
- FIFA، سجل أبطال كأس العالم 1982–2026: https://www.fifa.com/en/tournaments/mens/worldcup/articles/world-cup-champions-1982-2026-italy-argentina-germany-brazil-france-spain
- UEFA، سجل أبطال بطولة أمم أوروبا: https://www.uefa.com/news/0253-0d81c56ff408-45bf000cd5b6-1000--euro-roll-of-honour/
- UEFA، ملف إحصائيات بطولة أمم أوروبا 2024 وسجل النهائيات: https://editorial.uefa.com/resources/0288-1996c6285a5f-18c2ec433585-1000/euro_draw_press_kit.pdf

## تحديث قسم انتقالات اللاعبين
- أضيفت مسارات مهنية للاعبين الحاليين والمعتزلين، مع بيان الحالة داخل السؤال: «لاعب حالي» أو «لاعب معتزل».
- تعرض التلميحات الأندية بالترتيب حتى آخر نادٍ مدرج في بيانات اللاعب، وتشمل الإعارات عندما تكون جزءاً من مساره.
- خيارات أسئلة «لاعب من انتقالاته» أصبحت أسماء لاعبين فقط، وخيارات أسئلة الأندية أصبحت أسماء أندية، وأسئلة بنك المعلومات تسحب مشتتاتها من الفئة نفسها.
- يمكن إضافة لاعب جديد من محرر المحتوى مع تحديد حالته ومركزه وإدخال الأندية بالترتيب.

### مراجع التحقق المستخدمة
- سجلات المسيرة والانتقالات لكريستيانو رونالدو، آخر تحديث 1 نوفمبر 2026: https://www.footballtransfers.com/en/players/cristiano-ronaldo/transfer-history
- مسارات الأندية ومقارنة لاعبي القمة في موسم 2025-26 / 2026: https://fbref.com/en/stathead/player_comparison.cgi?comp_type=by_type&dom_lg=1&p1yrfrom=2025-2026&p2yrfrom=2026&p3yrfrom=2025-2026&p4yrfrom=2025-2026&p5yrfrom=2025-2026&p6yrfrom=2026&player_id1=e342ad68&player_id2=d70ce98e&player_id3=dea698d9&player_id4=42fd9c7f&player_id5=1f44ac21&player_id6=69384e5d&request=1&show_form=1&sum=0
- انتقالات الدوري الإنجليزي لصيف 2026-27 (ومنها انتقال محمد صلاح إلى طرابزون سبور): https://www.si.com/soccer/premier-league-done-deals-2026-27-summer-transfer
- إعلان اعتزال أندريس إنييستا: https://www.fcbarcelona.com/en/football/first-team/news/4145426/
- إعلان اعتزال غاريث بيل: https://www.lafc.com/news/gareth-bale-announces-retirement-from-professional-football
- إعلان اعتزال زلاتان إبراهيموفيتش وسجل آخر نادٍ: https://www.transfermarkt.com/zlatan-ibrahimovic/transfers/spieler/3455

ملاحظة تحريرية: المسارات هي مسارات الأندية في الفريق الأول، وليست سجلّاً لكل انتقال في فرق الناشئين أو المنتخبات. يجب مراجعة تحديثات الانتقالات بعد كل نافذة انتقالات لإبقاء النادي الأخير والحالة محدثين.


### تحديث أسئلة مسيرة الانتقالات
في أسئلة «لاعب من انتقالاته» يظهر الآن مسار الأندية الكامل الموجود في بيانات اللاعب دفعة واحدة، من أول نادٍ مسجل في المسار إلى آخر نادٍ، بدلاً من إظهار أول نادٍ فقط ثم كشف بقية المسار كتلميحات. تم إيقاف زر التلميح الإضافي لهذا النوع من الأسئلة.

## Question-bank capacity and duplicate prevention
The settings screen now reports the available unique questions per section against the requested target of 500 (250 medium and 250 very hard). The project does not claim a section is complete unless its counts reach both difficulty targets. Question IDs are tracked locally to prevent repeats within a match and across subsequent matches on the same device; the history window is retained up to 10,000 IDs. Each match remains capped at 100 questions.

Note: the supplied source data currently does not contain 500 unique questions in each section. The UI reports the actual counts and the remaining gap rather than fabricating duplicate questions.
