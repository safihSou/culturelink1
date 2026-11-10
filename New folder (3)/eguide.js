/* My eGuide: a travel-guide chatbot for CultureLink.
   Self-contained: injects its own CSS and markup, works on every page of the site.
   It answers locally from the site's sample data (no server, no API key).
   To connect a real AI backend, set window.EGUIDE_ENDPOINT before this script loads;
   it will receive POST {message, locale, history} and should reply {reply: "text"}. */
(function () {
  'use strict';
  var D = {"ui":{"title":["My eGuide","我的 eGuide","我的 eGuide"],"sub":["Your Suzhou travel guide","你的蘇州旅遊嚮導","你的苏州旅游向导"],"ph":["Ask about food, hotels, trips…","問問美食、酒店、行程…","问问美食、酒店、行程…"],"send":["Send","送出","送出"],"open":["Open My eGuide","開啟 My eGuide","开启 My eGuide"],"close":["Close","關閉","关闭"],"note":["Suggestions use this site’s sample data. Check hours and prices before you go.","建議以本網站的示範資料為準。出發前請再確認開放時間及價格。","建议以本网站的示范资料为准。出发前请再确认开放时间及价格。"],"seal":["導","導","导"],"welcome":["Hi, I’m My eGuide. I can suggest where to eat, where to stay and what to see, and plan your days in Suzhou. What would you like to do?","你好，我是 My eGuide。我可以推薦餐廳、住宿和景點，也可以安排你的蘇州行程。想從哪裡開始？","你好，我是 My eGuide。我可以推荐餐厅、住宿和景点，也可以安排你的苏州行程。想从哪里开始？"],"fallback":["I’m not sure about that one yet. I can help with food, hotels, sights, opening hours, trip plans and how CultureLink works.","這個問題我暫時未能回答。我可以協助美食、住宿、景點、開放時間、行程，以及 CultureLink 的使用方法。","这个问题我暂时未能回答。我可以协助美食、住宿、景点、开放时间、行程，以及 CultureLink 的使用方法。"],"thanks":["You’re welcome! Want a day plan or a dinner idea next?","不客氣！接着想要一天行程，還是晚餐建議？","不客气！接着想要一天行程，还是晚餐建议？"],"greet":["Hello! Are you in the mood for food, a place to stay, or a day plan?","你好！想找美食、住宿，還是一天行程？","你好！想找美食、住宿，还是一天行程？"],"who":["I’m My eGuide, a travel helper for Suzhou. Ask me for restaurants, hotels, sights, opening hours or a day-by-day plan, or ask how stamps and rewards work.","我是 My eGuide，蘇州旅遊小幫手。你可以問我餐廳、酒店、景點、開放時間或逐日行程，也可以問印章及獎勵怎麼運作。","我是 My eGuide，苏州旅游小帮手。你可以问我餐厅、酒店、景点、开放时间或逐日行程，也可以问印章及奖励怎么运作。"],"none_food":["I couldn’t find an exact match, so here are some favourites:","找不到完全符合的，先為你介紹幾間人氣之選：","找不到完全符合的，先为你介绍几间人气之选："],"food_intro":["Here’s where I’d eat:","我會推薦這幾間：","我会推荐这几间："],"hotel_intro":["Here are stays that fit (sample nightly rates):","以下住宿或許合適（示範房價，每晚）：","以下住宿或许合适（示范房价，每晚）："],"place_intro":["These are worth your time:","這幾處值得一去：","这几处值得一去："],"trip_intro":["Here are the trips on CultureLink. Tell me how many days you have and I’ll build a plan.","CultureLink 有以下行程。告訴我你有幾天，我就為你安排。","CultureLink 有以下行程。告诉我你有几天，我就为你安排。"],"pricekey":["$ budget, $$ mid-range, $$$ a treat","$ 平價、$$ 中價、$$$ 犒賞自己","$ 平价、$$ 中价、$$$ 犒赏自己"],"hours_all":["Opening hours (sample data):","開放時間（示範資料）：","开放时间（示范资料）："],"hours_one":["Opening hours","開放時間","开放时间"],"photo":["Check-in photo spot","打卡拍照位","打卡拍照位"],"addr":["Address","地址","地址"],"day":["Day ","第","第"],"daysfx":["","天","天"],"plan_intro":["Here’s a relaxed {n}-day plan for Suzhou:","為你安排輕鬆的蘇州 {n} 天行程：","为你安排轻松的苏州 {n} 天行程："],"plan_cap":["I can plan up to 5 days, so here’s a 5-day version.","我最多可以安排 5 天，以下是 5 天版本。","我最多可以安排 5 天，以下是 5 天版本。"],"fam_tip":["With kids: keep to one main stop in the morning, a long lunch and an early evening.","帶小朋友同行：早上只安排一個主要景點，午餐放慢，晚上早點休息。","带小朋友同行：早上只安排一个主要景点，午餐放慢，晚上早点休息。"],"solo_tip":["Travelling solo? The night boats and tea house are easy to enjoy alone, and the Companions board can help you find a travel buddy.","一個人旅行？夜船和茶館一個人也很自在，亦可以到旅伴板尋找同行的人。","一个人旅行？夜船和茶馆一个人也很自在，亦可以到旅伴板寻找同行的人。"],"surprise_intro":["Here’s a surprise pick for you:","為你抽一個驚喜推薦：","为你抽一个惊喜推荐："],"cities":["The Culture Tree covers Nanjing, Suzhou, Wuxi and Yangzhou. Stamps and quizzes launch in Suzhou first, and Yangzhou trips (Slender West Lake) are coming soon.","文化樹涵蓋南京、蘇州、無錫和揚州。印章及測驗先在蘇州推出，揚州行程（瘦西湖）即將推出。","文化树涵盖南京、苏州、无锡和扬州。印章及测验先在苏州推出，扬州行程（瘦西湖）即将推出。"],"tips_h":["A few practical tips:","幾個實用貼士：","几个实用贴士："],"tips":[["Mobile payments such as Alipay and WeChat Pay are widely used on the mainland. Bring a card and some cash as backup.","內地普遍使用支付寶及微信支付，建議另備銀行卡及少量現金。","内地普遍使用支付宝及微信支付，建议另备银行卡及少量现金。"],["Gardens and museums get busy on weekends and holidays. Arriving at opening time is calmer.","週末及假日園林和博物館較擠擁，開門時段到達會比較清靜。","周末及假日园林和博物馆较挤拥，开门时段到达会比较清静。"],["Lotus ponds are at their best in summer. Spring and autumn are comfortable for walking between gardens.","荷塘夏天最美；春秋兩季適合在園林之間散步。","荷塘夏天最美；春秋两季适合在园林之间散步。"],["Wear comfortable shoes: lanes are cobbled and bridges are stone steps.","請穿舒適的鞋，巷弄是石板路，橋多為石階。","请穿舒适的鞋，巷弄是石板路，桥多为石阶。"],["Check current entry requirements and ticket-booking rules with official sources before you travel.","出發前請向官方渠道確認最新入境要求及購票方式。","出发前请向官方渠道确认最新入境要求及购票方式。"]],"museum_note":["The Suzhou Museum is closed on Mondays.","蘇州博物館逢星期一休館。","苏州博物馆逢星期一休馆。"],"app":{"stamps":["Check in at a landmark with a live photo to earn its stamp and 10 points. Each landmark quiz has five questions worth 20 points each, and a perfect score upgrades the stamp to gold with a 50-point bonus.","以即時相片在地標打卡，即可獲得印章及 10 積分。每個地標測驗有五題，每題 20 積分；全對可升級為金印章，並額外獲得 50 積分。","以即时相片在地标打卡，即可获得印章及 10 积分。每个地标测验有五题，每题 20 积分；全对可升级为金印章，并额外获得 50 积分。"],"account":["The Culture Tree and information pages are open to everyone. The passport, stamps, rewards and companion board need an account, which you can create from the home page.","文化樹及資訊頁面開放給所有人。護照、印章、獎勵及旅伴板需要帳戶，可在首頁建立。","文化树及资讯页面开放给所有人。护照、印章、奖励及旅伴板需要帐户，可在首页建立。"],"rewards":["Tiers are Explorer (start), Voyager (500 points) and Ambassador (1,200 points). Sample rewards include a 20% tea house voucher at 500 points and HK$50 travel app credit at 1,200. Rewards are demonstrations only in this prototype.","等級分為探索者（起步）、旅行家（500 分）及大使（1,200 分）。示範獎勵包括 500 分換茶館八折券、1,200 分換港幣 50 元旅遊 App 現金券。原型中的獎勵僅作示範。","等级分为探索者（起步）、旅行家（500 分）及大使（1,200 分）。示范奖励包括 500 分换茶馆八折券、1,200 分换港币 50 元旅游 App 现金券。原型中的奖励仅作示范。"],"companions":["The Companions board lets you post a trip (solo, family or group) and see who is travelling to the same place and dates. It needs an account.","旅伴板可讓你發佈行程（個人、家庭或結伴），並看到同日期同地點的旅客。需要登入帳戶。","旅伴板可让你发布行程（个人、家庭或结伴），并看到同日期同地点的旅客。需要登入帐户。"],"tree":["The Culture Tree has 12 experiences across 4 cities and is open to everyone, no account needed.","文化樹包含 4 個城市共 12 項體驗，無需帳戶即可瀏覽。","文化树包含 4 个城市共 12 项体验，无需帐户即可浏览。"],"data":["In this prototype your profile, stamps and points are stored only in your own browser. Clearing browser data removes them.","在此原型中，你的資料、印章及積分只儲存在你自己的瀏覽器內，清除瀏覽器資料便會移除。","在此原型中，你的资料、印章及积分只储存在你自己的浏览器内，清除浏览器资料便会移除。"],"general":["CultureLink is a travel journal: collect stamps at landmarks, answer quizzes for points and gold stamps, and find companions. Which part would you like to know more about?","CultureLink 是旅遊日誌：在地標收集印章、答測驗賺積分及金印章，並尋找旅伴。想了解哪一部分？","CultureLink 是旅游日志：在地标收集印章、答测验赚积分及金印章，并寻找旅伴。想了解哪一部分？"]},"links":{"passport":["Open my passport","打開我的護照","打开我的护照"],"explore":["Open Explore","打開探索","打开探索"],"companions":["Open Companions","打開旅伴板","打开旅伴板"],"rewards":["Open Rewards","打開獎勵","打开奖励"],"tree":["Open Culture Tree","打開文化樹","打开文化树"]}},"pl":[{"k":"humble|zhuozheng|拙政","n":["Humble Administrator’s Garden","拙政園","拙政园"],"h":"07:30–17:30","a":"178 Northeast St, Gusu","ph":["Lotus pond pavilion","荷塘亭閣","荷塘亭阁"],"b":["Suzhou’s best-known classical garden, with lotus ponds, pavilions and zig-zag bridges. Allow 2 to 3 hours.","蘇州最著名的古典園林，有荷塘、亭閣和曲橋。建議預留 2 至 3 小時。","苏州最著名的古典园林，有荷塘、亭阁和曲桥。建议预留 2 至 3 小时。"],"tg":"garden lotus classic photo history","f":[0,4],"img":"loc-00-humble-administrator-garden.jpg"},{"k":"lingering|留園|留园","n":["Lingering Garden","留園","留园"],"h":"07:30–17:00","a":"338 Liuyuan Rd, Gusu","ph":["Cloud-Capped Peak","冠雲峰","冠云峰"],"b":["A classical garden known for its rock formations and covered corridors. Great for photos of the Cloud-Capped Peak.","以奇石和長廊聞名的古典園林，冠雲峰是熱門拍攝點。","以奇石和长廊闻名的古典园林，冠云峰是热门拍摄点。"],"tg":"garden classic photo","f":[1],"img":"loc-01-lingering-garden.jpg"},{"k":"tiger hill|huqiu|虎丘","n":["Tiger Hill","虎丘","虎丘"],"h":"07:30–17:30","a":"8 Shanmen Inner Rd, Gusu","ph":["Yunyan Pagoda base","雲巖寺塔下","云岩寺塔下"],"b":["A historic hill topped by the Yunyan Pagoda. A relaxed climb with a lot of history.","山頂有雲巖寺塔的歷史名丘，登山輕鬆，故事很多。","山顶有云岩寺塔的历史名丘，登山轻松，故事很多。"],"tg":"history walk photo","f":[1],"img":"loc-02-tiger-hill.jpg"},{"k":"pingjiang|平江","n":["Pingjiang Road","平江路","平江路"],"h":["All day","全日開放","全日开放"],"a":"Pingjiang Rd, Gusu","ph":["Stone bridge at dawn","清晨石橋","清晨石桥"],"b":["A canal-side lane of old houses, cafés and tea shops. Lovely for a slow stroll, morning or evening.","沿運河而建的老街，有舊宅、咖啡店和茶館，早晚散步都很舒服。","沿运河而建的老街，有旧宅、咖啡店和茶馆，早晚散步都很舒服。"],"tg":"canal walk photo evening cafe family","f":[0,1],"img":"loc-03-pingjiang-road.jpg"},{"k":"shantang|山塘","n":["Shantang Street","山塘街","山塘街"],"h":["All day","全日開放","全日开放"],"a":"Shantang St, Gusu","ph":["Canal boat view","運河船景","运河船景"],"b":["A lantern-lit canal street. Come in the evening for the night boats.","燈籠高掛的運河老街，傍晚來坐夜船最有氣氛。","灯笼高挂的运河老街，傍晚来坐夜船最有气氛。"],"tg":"canal night evening photo walk","f":[1],"img":"loc-04-shantang-street.jpg"},{"k":"museum|博物","n":["Suzhou Museum","蘇州博物館","苏州博物馆"],"h":["09:00–17:00 (closed Mon)","09:00–17:00（逢星期一休館）","09:00–17:00（逢星期一休馆）"],"a":"204 Northeast St","ph":["Main hall geometry","大廳幾何線條","大厅几何线条"],"b":["A modern building with a garden courtyard, and a good rainy-day choice next to the Humble Administrator’s Garden.","現代建築配庭院，位置毗鄰拙政園，下雨天也很合適。","现代建筑配庭院，位置毗邻拙政园，下雨天也很合适。"],"tg":"museum art rain culture","f":[0,4],"img":"loc-05-suzhou-museum.jpg"},{"k":"panmen|pan men|盤門|盘门","n":["Panmen Gate","盤門","盘门"],"h":"08:00–17:00","a":"1 Dongda St, Gusu","ph":["Ruiguang Pagoda from bridge","橋上望瑞光塔","桥上望瑞光塔"],"b":["A rare surviving city gate with a water-and-land design and the Ruiguang Pagoda. Usually quieter than the big gardens.","保存難得的水陸城門，旁有瑞光塔，通常比大型園林清靜。","保存难得的水陆城门，旁有瑞光塔，通常比大型园林清静。"],"tg":"history quiet photo","f":[0],"img":"loc-06-panmen-gate.jpg"},{"k":"jinji|金雞|金鸡","n":["Jinji Lake","金雞湖","金鸡湖"],"h":["All day","全日開放","全日开放"],"a":"SIP district","ph":["Lakefront boardwalk","湖畔棧道","湖畔栈道"],"b":["A modern lakefront with boardwalks and city views. Best around sunset, good for families.","現代化湖畔，有棧道和城市景觀，日落時分最好，適合家庭。","现代化湖畔，有栈道和城市景观，日落时分最好，适合家庭。"],"tg":"lake sunset walk modern family","f":[2,5],"img":"loc-07-jinji-lake.jpg"},{"k":"nets|網師|网师","n":["Master of the Nets Garden","網師園","网师园"],"h":"07:30–17:30","a":"11 Kuojiatou Alley","ph":["Courtyard moon gate","庭院月洞門","庭院月洞门"],"b":["A small, intimate garden. Easier to enjoy than the bigger ones when you want calm.","小巧精緻的園林，想清靜一點時比大園林更好逛。","小巧精致的园林，想清静一点时比大园林更好逛。"],"tg":"garden classic quiet photo","f":[4,0],"img":"loc-08-master-nets-garden.jpg"},{"k":"tongli|同里","n":["Tongli Water Town","同里古鎮","同里古镇"],"h":"08:00–17:00","a":"Tongli, Wujiang","ph":["Three Bridges","三橋","三桥"],"b":["A canal town of stone bridges and old lanes, best as a half-day or full-day trip from the city.","以石橋和老巷聞名的水鄉古鎮，適合從市區出發玩半天或一天。","以石桥和老巷闻名的水乡古镇，适合从市区出发玩半天或一天。"],"tg":"canal water boat photo family","f":[3],"img":"loc-09-tongli-water-town.jpg"}],"food":[{"n":["Songhe Lou-style noodles","松鶴樓式麵食","松鹤楼式面食"],"ty":["Suzhou noodles","蘇州麵","苏州面"],"p":"$","a":["Pingjiang Rd","平江路","平江路"],"b":["A classic bowl of Suzhou noodles, a quick and easy meal near Pingjiang Road.","經典蘇式麵，在平江路附近快速又方便的一餐。","经典苏式面，在平江路附近快速又方便的一餐。"],"tg":"noodles","img":"food-00-songhe-noodles.jpg"},{"n":["Tea House on the Canal","運河茶館","运河茶馆"],"ty":["Tea & dim sum","茶與點心","茶与点心"],"p":"$$","a":["Shantang St","山塘街","山塘街"],"b":["Tea and small dishes by the water, a calm break between walks.","在水邊品茶、吃點心，適合散步途中歇一歇。","在水边品茶、吃点心，适合散步途中歇一歇。"],"tg":"tea","img":"food-01-canal-tea-house.jpg"},{"n":["Osmanthus Kitchen","桂花廚房","桂花厨房"],"ty":["Jiangnan classics","江南經典","江南经典"],"p":"$$$","a":["Jinji Lake","金雞湖","金鸡湖"],"b":["Sit-down Jiangnan classics by the lake, good for a special dinner.","湖畔的江南菜館，適合慶祝或特別的一頓晚餐。","湖畔的江南菜馆，适合庆祝或特别的一顿晚餐。"],"tg":"classic dinner","img":"food-02-osmanthus-kitchen.jpg"},{"n":["Tongli Dumpling Stall","同里餃子攤","同里饺子摊"],"ty":["Street food","街頭小吃","街头小吃"],"p":"$","a":["Tongli","同里","同里"],"b":["Quick street food while you wander the canals of Tongli.","逛同里水巷時隨手買的街頭小吃。","逛同里水巷时随手买的街头小吃。"],"tg":"street","img":"food-03-tongli-dumplings.jpg"},{"n":["Moon Gate Vegetarian","月門素菜","月门素菜"],"ty":["Vegetarian","素菜","素菜"],"p":"$$","a":["Master of the Nets","網師園","网师园"],"b":["Vegetarian dishes close to Master of the Nets Garden.","網師園附近的素菜館。","网师园附近的素菜馆。"],"tg":"veg","img":"food-04-moongate-vegetarian.jpg"},{"n":["Lakeside Hotpot","湖畔火鍋","湖畔火锅"],"ty":["Hotpot","火鍋","火锅"],"p":"$$","a":["SIP district","園區","园区"],"b":["Hotpot in the SIP district, best with a group.","園區的火鍋店，人多一起吃最開心。","园区的火锅店，人多一起吃最开心。"],"tg":"hotpot group","img":"food-05-lakeside-hotpot.jpg"}],"hotels":[{"n":["Gusu Courtyard Inn","姑蘇庭院客棧","姑苏庭院客栈"],"r":["HK$480–650","港幣480–650元","港币480–650元"],"a":["near Pingjiang Rd","近平江路","近平江路"],"m":480,"p":[3,0],"b":["Courtyard-style inn within walking distance of Pingjiang Road’s cafés and canal.","庭院式客棧，步行可到平江路的咖啡店和運河。","庭院式客栈，步行可到平江路的咖啡店和运河。"],"img":"hotel-00-gusu-courtyard.jpg"},{"n":["Lakeview Suites","湖景套房酒店","湖景套房酒店"],"r":["HK$700–950","港幣700–950元","港币700–950元"],"a":["near Jinji Lake","近金雞湖","近金鸡湖"],"m":700,"p":[7],"b":["Modern suites by Jinji Lake, good for skyline views and sunset walks.","金雞湖畔的現代套房，可看城市天際線，傍晚適合散步。","金鸡湖畔的现代套房，可看城市天际线，傍晚适合散步。"],"img":"hotel-01-lakeview-suites.jpg"},{"n":["Garden Gate Hotel","園門酒店","园门酒店"],"r":["HK$550–780","港幣550–780元","港币550–780元"],"a":["near Humble Garden","近拙政園","近拙政园"],"m":550,"p":[0,5],"b":["A short walk from the Humble Administrator’s Garden, handy for an early entry.","步行即可到拙政園，方便一早入場。","步行即可到拙政园，方便一早入场。"],"img":"hotel-02-garden-gate.jpg"},{"n":["Canal House B&B","運河之家民宿","运河之家民宿"],"r":["HK$380–520","港幣380–520元","港币380–520元"],"a":["near Shantang St","近山塘街","近山塘街"],"m":380,"p":[4,2],"b":["A cosy canal-side B&B near Shantang Street, the lowest rate on this list.","山塘街附近的運河民宿，是名單中價格最低的一間。","山塘街附近的运河民宿，是名单中价格最低的一间。"],"img":"hotel-03-canal-house.jpg"}],"trips":[{"n":["Suzhou in a Day","蘇州一日遊","苏州一日游"],"d":["1 day","1天","1天"],"s":["Humble Garden · Pingjiang Road · Shantang night boats","拙政園 · 平江路 · 山塘夜船","拙政园 · 平江路 · 山塘夜船"],"ty":"solo","img":"trip-00-suzhou-in-a-day.jpg"},{"n":["Gardens & Canals","園林與運河","园林与运河"],"d":["2 days","2天","2天"],"s":["Lingering Garden · Tiger Hill · Tongli","留園 · 虎丘 · 同里","留园 · 虎丘 · 同里"],"ty":"family","img":"trip-01-gardens-canals.jpg"},{"n":["Suzhou Slow Trip","蘇州慢遊","苏州慢游"],"d":["3 days","3天","3天"],"s":["Museum · Master of the Nets · Jinji Lake","蘇州博物館 · 網師園 · 金雞湖","苏州博物馆 · 网师园 · 金鸡湖"],"ty":"family","img":"trip-02-suzhou-slow.jpg"},{"n":["Suzhou + Yangzhou","蘇州＋揚州","苏州＋扬州"],"d":["5 days","5天","5天"],"s":["Classic gardens then Slender West Lake (coming soon)","經典園林，再去瘦西湖（即將推出）","经典园林，再去瘦西湖（即将推出）"],"ty":"solo","img":"trip-03-suzhou-yangzhou.jpg"}],"days":{"A":{"t":["Gardens and lanes","園林與老街","园林与老街"],"s":[["Morning: Humble Administrator’s Garden (2 to 3 hours)","上午：拙政園（2 至 3 小時）","上午：拙政园（2 至 3 小时）"],["Lunch: noodles near Pingjiang Road","午餐：平江路附近吃蘇式麵","午餐：平江路附近吃苏式面"],["Afternoon: stroll Pingjiang Road with a tea stop","下午：漫步平江路，找間茶館歇腳","下午：漫步平江路，找间茶馆歇脚"],["Evening: Shantang Street night boats","晚上：山塘街夜船","晚上：山塘街夜船"]]},"B":{"t":["Gardens and a hill","園林與山丘","园林与山丘"],"s":[["Morning: Lingering Garden","上午：留園","上午：留园"],["Lunch: Tea House on the Canal","午餐：運河茶館","午餐：运河茶馆"],["Afternoon: Tiger Hill and the Yunyan Pagoda","下午：虎丘及雲巖寺塔","下午：虎丘及云岩寺塔"],["Evening: easy dinner and an early night","晚上：輕鬆晚餐，早點休息","晚上：轻松晚餐，早点休息"]]},"C":{"t":["Tongli water town","同里水鄉","同里水乡"],"s":[["Morning: travel to Tongli, then the Three Bridges","上午：前往同里，遊覽三橋","上午：前往同里，游览三桥"],["Lunch: Tongli Dumpling Stall","午餐：同里餃子攤","午餐：同里饺子摊"],["Afternoon: wander the canals and old lanes","下午：漫步水巷老街","下午：漫步水巷老街"],["Evening: return to the city","傍晚：返回市區","傍晚：返回市区"]]},"D":{"t":["Museum and lakeside","博物館與湖畔","博物馆与湖畔"],"s":[["Morning: Suzhou Museum (closed Mondays)","上午：蘇州博物館（逢星期一休館）","上午：苏州博物馆（逢星期一休馆）"],["Lunch: Moon Gate Vegetarian, then Master of the Nets Garden","午餐：月門素菜，之後遊網師園","午餐：月门素菜，之后游网师园"],["Late afternoon: Jinji Lake boardwalk at sunset","傍晚：金雞湖畔看日落","傍晚：金鸡湖畔看日落"],["Dinner: Osmanthus Kitchen","晚餐：桂花廚房","晚餐：桂花厨房"]]},"E":{"t":["A slow day","慢活一天","慢活一天"],"s":[["Morning: Panmen Gate and the Ruiguang Pagoda","上午：盤門及瑞光塔","上午：盘门及瑞光塔"],["Afternoon: tea, a revisit of your favourite spot, or shopping","下午：喝茶、重遊最愛的地方，或逛逛買手信","下午：喝茶、重游最爱的地方，或逛逛买手信"],["Evening: Lakeside Hotpot to celebrate","晚上：湖畔火鍋慶祝一下","晚上：湖畔火锅庆祝一下"]]}},"plan":{"1":"A","2":"AC","3":"ABD","4":"ABCD","5":"ABCDE"},"ch":{"eat":{"l":["Where should I eat?","去哪裡吃？","去哪里吃？"],"q":["Where should I eat?","去哪裡吃好？","去哪里吃好？"]},"stay":{"l":["Where to stay","住宿推薦","住宿推荐"],"q":["Where should I stay?","住宿推薦","住宿推荐"]},"see":{"l":["Things to see","景點推薦","景点推荐"],"q":["What should I see?","有什麼景點？","有什么景点？"]},"plan":{"l":["Plan my trip","安排行程","安排行程"],"q":["Plan a 2-day trip","安排兩日行程","安排两日行程"]},"hours":{"l":["Opening hours","開放時間","开放时间"],"q":["What are the opening hours?","開放時間是幾點？","开放时间是几点？"]},"stamps":{"l":["How stamps work","印章怎麼用","印章怎么用"],"q":["How do stamps work?","印章怎麼用？","印章怎么用？"]},"veg":{"l":["Vegetarian","素食","素食"],"q":["Vegetarian options","素食選擇","素食选择"]},"cheap":{"l":["Cheap eats","平價美食","平价美食"],"q":["Cheap eats","平價美食","平价美食"]},"cheapstay":{"l":["Cheaper stays","平一點的住宿","平一点的住宿"],"q":["Cheaper hotels","平一點的住宿","平一点的住宿"]},"nightv":{"l":["Night views","夜景","夜景"],"q":["Where can I see night views?","哪裡有夜景？","哪里有夜景？"]},"kids":{"l":["With kids","親子行程","亲子行程"],"q":["Trip with kids","親子行程","亲子行程"]},"d1":{"l":["1 day","1 天","1 天"],"q":["Plan a 1-day trip","安排一日行程","安排一日行程"]},"d3":{"l":["3 days","3 天","3 天"],"q":["Plan a 3-day trip","安排三日行程","安排三日行程"]},"d5":{"l":["5 days","5 天","5 天"],"q":["Plan a 5-day trip","安排五日行程","安排五日行程"]},"tips":{"l":["Travel tips","旅遊貼士","旅游贴士"],"q":["Any travel tips?","有什麼旅遊貼士？","有什么旅游贴士？"]},"surprise":{"l":["Surprise me","給我驚喜","给我惊喜"],"q":["Surprise me","給我驚喜","给我惊喜"]},"rewards":{"l":["Rewards","獎勵","奖励"],"q":["How do rewards work?","獎勵怎麼用？","奖励怎么用？"]},"account":{"l":["Do I need an account?","需要帳戶嗎？","需要帐户吗？"],"q":["Do I need an account?","需要帳戶嗎？","需要帐户吗？"]}}};
  var LANGS = ['en', 'zh-Hant', 'zh-Hans'];

  /* ---------- helpers ---------- */
  function loc() {
    try { var s = JSON.parse(localStorage.getItem('cl') || 'null'); if (s && s.locale >= 0 && s.locale < 3) return s.locale; } catch (e) {}
    var l = document.documentElement.lang || 'en';
    return /Hant/.test(l) ? 1 : /Hans/.test(l) ? 2 : 0;
  }
  function tx(a) { return typeof a === 'string' ? a : (a[loc()] || a[0]); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var isMain = !!document.getElementById('app');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- styles ---------- */
  var css = '' +
    '.eg-launch{position:fixed;left:16px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:6;display:flex;align-items:center;gap:10px;padding:7px 18px 7px 7px;border:0;border-radius:999px;background:var(--jade,#0E8574);color:#faf7ef;font:600 .95rem/1 Inter,"Noto Sans SC",system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 22px rgba(18,65,52,.32)}' +
    '.eg-launch:hover{filter:brightness(1.06)}' +
    '.eg-seal{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:var(--ver,#E8503A);color:#fff;font:700 1.1rem/1 "Noto Serif SC","Playfair Display",Georgia,serif;transform:rotate(-6deg);box-shadow:inset 0 0 0 2px rgba(255,255,255,.55)}' +
    '.eg-panel{position:fixed;left:16px;bottom:calc(76px + env(safe-area-inset-bottom,0px));z-index:30;width:min(390px,calc(100vw - 24px));height:min(600px,calc(100dvh - 110px));display:flex;flex-direction:column;background:var(--card,#fffdf8);color:var(--fg,#2a1f14);border:1px solid var(--bd,#e8d8b8);border-radius:18px;box-shadow:0 18px 48px rgba(0,0,0,.28);overflow:hidden;font:15px/1.5 Inter,"Noto Sans SC",system-ui,sans-serif}' +
    '.eg-panel[hidden]{display:none}' +
    '.eg-h{display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--jade,#0E8574);color:#faf7ef;border-bottom:3px solid var(--gold,#F2B705)}' +
    '.eg-h div{flex:1;min-width:0}.eg-h b{display:block;font:700 1.1rem/1.2 "Playfair Display","Noto Serif SC",Georgia,serif}.eg-h small{font-size:.78rem;opacity:.85}' +
    '.eg-x{flex:none;width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.16);color:#fff;font-size:1.3rem;line-height:1;cursor:pointer}' +
    '.eg-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}' +
    '.eg-m{max-width:92%;padding:9px 12px;border-radius:14px;word-wrap:break-word}' +
    '.eg-m p{margin:0 0 6px}.eg-m p:last-child{margin-bottom:0}' +
    '.eg-b{align-self:flex-start;background:var(--bg,#faf7ef);border:1px solid var(--bd,#e8d8b8);border-bottom-left-radius:4px}' +
    '.eg-u{align-self:flex-end;background:var(--jade,#0E8574);color:#fff;border-bottom-right-radius:4px}' +
    '.eg-card{display:flex;gap:10px;margin:8px 0 0;padding:8px;background:var(--card,#fffdf8);border:1px solid var(--bd,#e8d8b8);border-radius:12px}' +
    '.eg-card img{flex:none;width:62px;height:62px;object-fit:cover;border-radius:8px;background:var(--bd,#e8d8b8)}' +
    '.eg-card div{min-width:0}.eg-card b{display:block;font:700 .95rem/1.3 "Playfair Display","Noto Serif SC",Georgia,serif}' +
    '.eg-card small{display:block;color:var(--mut,#7a6a55);font-size:.78rem}.eg-card p{margin:3px 0 0;font-size:.85rem}' +
    '.eg-day{margin:8px 0 0;padding:8px 10px;border-left:3px solid var(--gold,#F2B705);background:var(--card,#fffdf8);border-radius:0 10px 10px 0}' +
    '.eg-day b{font:700 .95rem/1.3 "Playfair Display","Noto Serif SC",Georgia,serif}.eg-day ul{margin:4px 0 0;padding-left:18px;font-size:.88rem}' +
    '.eg-list{margin:6px 0 0;padding-left:18px;font-size:.88rem}' +
    '.eg-chips{display:flex;gap:6px;padding:8px 12px 2px;overflow-x:auto;scrollbar-width:none}.eg-chips::-webkit-scrollbar{display:none}' +
    '.eg-chips button{flex:none;padding:5px 12px;border:1.5px solid var(--jade,#0E8574);border-radius:999px;background:none;color:var(--fg,#2a1f14);font:inherit;font-size:.82rem;cursor:pointer;white-space:nowrap}' +
    '.eg-chips button:hover{background:var(--jade,#0E8574);color:#fff}' +
    '.eg-form{display:flex;gap:8px;padding:8px 12px}' +
    '.eg-form input{flex:1;min-width:0;margin:0;padding:.55em .8em;border:1px solid var(--bd,#e8d8b8);border-radius:999px;background:var(--bg,#faf7ef);color:inherit;font:inherit}' +
    '.eg-form button{flex:none;margin:0;padding:.5em 1.1em;border:0;border-radius:999px;background:var(--ver,#E8503A);color:#fff;font:inherit;font-weight:600;cursor:pointer}' +
    '.eg-note{margin:0;padding:0 14px 10px;font-size:.72rem;color:var(--mut,#7a6a55)}' +
    '.eg-dots{display:inline-flex;gap:4px;padding:3px 0}.eg-dots i{width:7px;height:7px;border-radius:50%;background:var(--mut,#7a6a55);animation:eg-b 1s infinite ease-in-out}' +
    '.eg-dots i:nth-child(2){animation-delay:.15s}.eg-dots i:nth-child(3){animation-delay:.3s}' +
    '@keyframes eg-b{0%,80%,100%{opacity:.25}40%{opacity:1}}' +
    '.eg-launch:focus-visible,.eg-panel button:focus-visible,.eg-panel input:focus-visible{outline:3px solid var(--gold,#F2B705);outline-offset:2px}' +
    '@media(max-width:760px){.eg-launch{bottom:calc(82px + env(safe-area-inset-bottom,0px))}.eg-panel{left:8px;right:8px;width:auto;bottom:calc(8px + env(safe-area-inset-bottom,0px));height:min(80dvh,660px)}}' +
    '@media(prefers-reduced-motion:reduce){.eg-dots i{animation:none}.eg-log{scroll-behavior:auto}}';
  var st = document.createElement('style'); st.id = 'eg-style'; st.textContent = css; document.head.appendChild(st);

  /* ---------- markup ---------- */
  var root = document.createElement('div'); root.id = 'eguide';
  root.innerHTML =
    '<button type="button" class="eg-launch" aria-expanded="false" aria-controls="eg-panel"><span class="eg-seal" aria-hidden="true"></span><span class="eg-lt"></span></button>' +
    '<section class="eg-panel" id="eg-panel" role="dialog" aria-labelledby="eg-title" hidden>' +
    '<div class="eg-h"><span class="eg-seal" aria-hidden="true"></span><div><b id="eg-title"></b><small class="eg-sub"></small></div><button type="button" class="eg-x"></button></div>' +
    '<div class="eg-log" role="log" aria-live="polite"></div>' +
    '<div class="eg-chips"></div>' +
    '<form class="eg-form" autocomplete="off"><input type="text" maxlength="200"><button type="submit"></button></form>' +
    '<p class="eg-note"></p></section>';
  document.body.appendChild(root);
  var $ = function (s) { return root.querySelector(s); };
  var launch = $('.eg-launch'), panel = $('#eg-panel'), log = $('.eg-log'), chipsEl = $('.eg-chips'), form = $('.eg-form'), input = $('.eg-form input');

  function labels() {
    var L = D.ui;
    $('.eg-lt').textContent = tx(L.title);
    $('#eg-title').textContent = tx(L.title);
    $('.eg-sub').textContent = tx(L.sub);
    input.placeholder = tx(L.ph); input.setAttribute('aria-label', tx(L.ph));
    $('.eg-form button').textContent = tx(L.send);
    $('.eg-note').textContent = tx(L.note);
    $('.eg-x').textContent = '×'; $('.eg-x').setAttribute('aria-label', tx(L.close));
    launch.setAttribute('aria-label', tx(L.open));
    root.querySelectorAll('.eg-seal').forEach(function (e) { e.textContent = L.seal[loc()]; });
  }

  /* ---------- message log (kept for the browser session) ---------- */
  var hist = [];
  try { hist = JSON.parse(sessionStorage.getItem('eg-log') || '[]'); } catch (e) { hist = []; }
  function saveHist() { try { sessionStorage.setItem('eg-log', JSON.stringify(hist.slice(-30))); } catch (e) {} }
  function bubble(who, html) {
    var d = document.createElement('div'); d.className = 'eg-m ' + (who === 'u' ? 'eg-u' : 'eg-b'); d.innerHTML = html;
    log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function push(who, html) { hist.push({ w: who, h: html }); saveHist(); return bubble(who, html); }

  /* ---------- html builders ---------- */
  function P(s) { return '<p>' + s + '</p>'; }
  function card(o) {
    return '<div class="eg-card">' + (o.img ? '<img src="' + o.img + '" alt="" loading="lazy" onerror="this.remove()">' : '') +
      '<div><b>' + esc(o.t) + '</b>' + (o.m ? '<small>' + esc(o.m) + '</small>' : '') + (o.b ? '<p>' + esc(o.b) + '</p>' : '') + '</div></div>';
  }
  function chip(k) { return D.ch[k]; }

  /* ---------- language understanding ---------- */
  var R = {
    greet: /\b(hi|hello|hey|yo)\b|你好|您好|哈囉|哈啰|嗨|早晨|早安/,
    thanks: /\b(thanks?|thank you|thx)\b|謝|谢|多謝|唔該/,
    food: /\b(eat|eating|food|restaurants?|hungry|lunch|dinner|breakfast|brunch|noodles?|hotpot|hot pot|vegetarian|vegan|veggie|dumplings?|tea|snacks?|dessert|cafe|café|dim sum|meal|cheap eats)\b|餐|吃|食|飯|饭|麵|面食|面条|面馆|火鍋|火锅|素|茶|點心|点心|小吃|餓|饿|甜品|美食/,
    hotel: /\b(hotels?|stay|stays|sleep|accommodation|lodging|b&b|bnb|hostel|inn|where to stay)\b|住|酒店|客棧|客栈|民宿|旅館|旅馆/,
    trip: /\b(trip|trips|itinerary|plan|route|schedule|weekend|tour)\b|行程|路線|路线|安排|計劃|计划|週末|周末/,
    place: /\b(see|visit|attractions?|sights?|places?|gardens?|museum|lake|pagoda|temple|photos?|photography|sunset|night|canal|water town|things to do|sightseeing|landmarks?|lotus)\b|景點|景点|園林|园林|博物館|博物馆|夜景|拍照|攝影|摄影|去邊|去哪|好玩|地標|地标|古鎮|古镇|荷/,
    hours: /\b(open|opens|opening|hours|closed|closing)\b|開放|开放|營業|营业|幾點|几点|開門|开门|關門|关门|休館|休馆/,
    app: /\b(stamps?|passport|points?|quiz|quizzes|badge|rewards?|account|sign ?up|sign ?in|log ?in|companions?|culture tree|check ?in|tiers?|vouchers?|how does culturelink|culturelink work)\b|印章|護照|护照|積分|积分|獎勵|奖励|帳戶|账户|旅伴|文化樹|文化树|打卡|登入|登录|私隱|隐私/,
    tips: /\b(transport|taxi|metro|subway|bus|train|rail|pay|payment|alipay|wechat|cash|weather|season|best time|visa|permit|safe|safety|tips?|advice|sim|wifi)\b|交通|地鐵|地铁|支付|付款|天氣|天气|季節|季节|通行證|通行证|簽註|签注|貼士|贴士|注意/,
    cities: /\b(yangzhou|nanjing|wuxi)\b|揚州|扬州|南京|無錫|无锡/,
    surprise: /\b(surprise|random|anything|you choose|recommend)\b|隨便|随便|推薦|推荐|驚喜|惊喜/,
    who: /\b(who are you|what can you do|help|your name)\b|你係邊個|你是誰|你是谁|你能做|可以做|幫我|帮我|幫助|帮助/
  };
  var F = {
    low: /\b(cheap|cheaper|cheapest|budget|affordable|inexpensive|low cost)\b|便宜|平啲|平價|平价|經濟|经济|實惠|实惠|省錢|省钱|平一點|平一点/,
    high: /\b(fancy|luxury|upscale|splurge|expensive|romantic|special|treat)\b|高級|高级|豪華|豪华|浪漫|慶祝|庆祝/,
    fam: /\b(kids?|child|children|family|toddler|baby|parents)\b|家庭|小朋友|孩子|小孩|親子|亲子|幼兒|幼儿/,
    solo: /\b(solo|alone|myself)\b|一個人|一个人|個人|个人|獨遊|独游/,
    veg: /\b(vegetarian|vegan|veggie)\b|素|齋|斋/
  };
  var FT = [[/noodle|麵|面/, 'noodles'], [/\btea\b|dim sum|茶|點心|点心/, 'tea'], [/hotpot|hot pot|火鍋|火锅/, 'hotpot'], [/street|snack|dumpling|餃|饺|小吃/, 'street'], [/dinner|classic|晚餐|江南/, 'classic']];
  var PT = [
    [/garden|園林|园林|lotus|荷/, 'garden'], [/night|evening|lantern|夜/, 'night'], [/sunset|日落|黃昏|黄昏/, 'sunset'],
    [/museum|art|architecture|博物|建築|建筑/, 'museum'], [/canal|boat|water|運河|运河|船|水鄉|水乡/, 'canal'], [/lake|湖/, 'lake'],
    [/photo|instagram|拍照|攝影|摄影|影相/, 'photo'], [/quiet|peaceful|crowd|calm|安靜|安静|人少|清靜|清静/, 'quiet'],
    [/rain|indoor|下雨|雨/, 'rain'], [/history|historic|temple|pagoda|歷史|历史|塔/, 'history'], [/walk|stroll|散步|行街/, 'walk'], [/family|kids|child|親子|亲子|小朋友/, 'family']
  ];
  var NUM = { one: 1, two: 2, three: 3, four: 4, five: 5, '一': 1, '二': 2, '兩': 2, '两': 2, '三': 3, '四': 4, '五': 5 };

  function placeIdx(q) { for (var i = 0; i < D.pl.length; i++) if (new RegExp(D.pl[i].k).test(q)) return i; return -1; }
  function dayCount(q) {
    var m = q.match(/(\d)\s*-?\s*(?:days?|d\b|天|日)/) || q.match(/\b(one|two|three|four|five)[ -]days?\b/) || q.match(/([一二兩两三四五])\s*[天日]/);
    if (m) return NUM[m[1]] || parseInt(m[1], 10);
    if (/day trip|a day\b|一日|一天/.test(q)) return 1;
    if (/weekend|週末|周末/.test(q)) return 2;
    return 0;
  }
  function flags(q) { var o = {}; for (var k in F) o[k] = F[k].test(q); return o; }

  /* ---------- answers ---------- */
  function ans(h, chips) { return { h: h, c: chips || [] }; }

  function aFood(q, f, pi) {
    var L = D.ui, list = D.food.map(function (x, i) { return { x: x, i: i }; }), tag = null;
    FT.forEach(function (t) { if (!tag && t[0].test(q)) tag = t[1]; });
    var pool = list.filter(function (e) {
      if (f.veg) return e.x.tg.indexOf('veg') > -1;
      if (tag && e.x.tg.indexOf(tag) < 0) return false;
      if (f.low && e.x.p.length > 1) return false;
      if (f.high && e.x.p.length < 3) return false;
      if (pi >= 0 && D.pl[pi].f.indexOf(e.i) < 0) return false;
      return true;
    });
    var intro = tx(L.food_intro);
    if (!pool.length) { pool = list.slice(0, 3); intro = tx(L.none_food); }
    var cards = pool.slice(0, 3).map(function (e) { return card({ img: e.x.img, t: tx(e.x.n), m: e.x.p + ' · ' + tx(e.x.ty) + ' · ' + tx(e.x.a), b: tx(e.x.b) }); }).join('');
    return ans(P(intro) + cards + '<p><small>' + esc(tx(L.pricekey)) + '</small></p>', ['veg', 'cheap', 'stay', 'plan'].map(chip));
  }
  function aHotel(q, f, pi) {
    var L = D.ui, list = D.hotels.slice();
    if (pi >= 0) { var near = list.filter(function (h) { return h.p.indexOf(pi) > -1; }); if (near.length) list = near; }
    list.sort(function (a, b) { return f.high ? b.m - a.m : a.m - b.m; });
    if (f.low || f.high) list = list.slice(0, 2);
    var cards = list.slice(0, 3).map(function (h) { return card({ img: h.img, t: tx(h.n), m: tx(h.r) + ' · ' + tx(h.a), b: tx(h.b) }); }).join('');
    return ans(P(tx(L.hotel_intro)) + cards, ['cheapstay', 'eat', 'see', 'plan'].map(chip));
  }
  function aPlaceDetail(i) {
    var p = D.pl[i], L = D.ui;
    var body = tx(p.b) + ' ' + tx(L.photo) + ': ' + tx(p.ph) + '.';
    var h = card({ img: p.img, t: tx(p.n), m: tx(p.h) + ' · ' + p.a, b: body });
    if (i === 5) h += P(esc(tx(L.museum_note)));
    return ans(h, ['hours', 'eat', 'stay', 'plan'].map(chip));
  }
  function aPlaces(q, f) {
    var L = D.ui, want = [];
    PT.forEach(function (t) { if (t[0].test(q)) want.push(t[1]); });
    if (f.fam && want.indexOf('family') < 0) want.push('family');
    if (want.indexOf('night') > -1 || want.indexOf('sunset') > -1) want.push('evening');
    var sc = D.pl.map(function (p, i) { var s = 0; want.forEach(function (w) { if (p.tg.split(' ').indexOf(w) > -1) s++; }); return { i: i, s: s }; });
    sc.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
    var top = sc.filter(function (e) { return e.s > 0; }).slice(0, 3);
    if (!top.length) top = [{ i: 0 }, { i: 3 }, { i: 4 }];
    var cards = top.map(function (e) { var p = D.pl[e.i]; return card({ img: p.img, t: tx(p.n), m: tx(p.h), b: tx(p.b) }); }).join('');
    return ans(P(tx(L.place_intro)) + cards, ['hours', 'eat', 'nightv', 'plan'].map(chip));
  }
  function aHours(pi) {
    var L = D.ui;
    if (pi >= 0) { var p = D.pl[pi]; return ans(P('<b>' + esc(tx(p.n)) + '</b>: ' + esc(tx(p.h))) + (pi === 5 ? P(esc(tx(L.museum_note))) : '') + '<p><small>' + esc(tx(L.note)) + '</small></p>', ['see', 'eat', 'plan'].map(chip)); }
    var li = D.pl.map(function (p) { return '<li>' + esc(tx(p.n)) + ': ' + esc(tx(p.h)) + '</li>'; }).join('');
    return ans(P(esc(tx(L.hours_all))) + '<ul class="eg-list">' + li + '</ul>', ['see', 'eat', 'plan'].map(chip));
  }
  function aTrip(q, f, n) {
    var L = D.ui;
    if (!n) {
      var order = D.trips.slice();
      if (f.fam || f.solo) { var ty = f.fam ? 'family' : 'solo'; order.sort(function (a, b) { return (b.ty === ty) - (a.ty === ty); }); }
      var cards = order.map(function (t) { return card({ img: t.img, t: tx(t.n), m: tx(t.d), b: tx(t.s) }); }).join('');
      return ans(P(tx(L.trip_intro)) + cards, ['d1', 'plan', 'd3', 'd5'].map(chip));
    }
    var cap = n > 5; n = Math.min(Math.max(n, 1), 5);
    var keys = D.plan[String(n)].split(''), h = (cap ? P(esc(tx(L.plan_cap))) : '') + P(esc(tx(L.plan_intro).replace('{n}', n)));
    keys.forEach(function (k, i) {
      var d = D.days[k];
      h += '<div class="eg-day"><b>' + esc(tx(L.day) + (i + 1) + tx(L.daysfx)) + ' · ' + esc(tx(d.t)) + '</b><ul>' + d.s.map(function (s) { return '<li>' + esc(tx(s)) + '</li>'; }).join('') + '</ul></div>';
    });
    if (f.fam) h += P(esc(tx(L.fam_tip)));
    if (f.solo) h += P(esc(tx(L.solo_tip)));
    h += '<p><small>' + esc(tx(L.note)) + '</small></p>';
    return ans(h, ['stay', 'eat', 'hours', 'kids'].map(chip));
  }
  function aApp(q) {
    var A = D.ui.app, k = 'general', links = [];
    if (/stamp|quiz|point|check ?in|badge|印章|積分|积分|打卡/.test(q)) { k = 'stamps'; links = ['passport']; }
    if (/reward|voucher|tier|獎勵|奖励/.test(q)) { k = 'rewards'; links = ['rewards']; }
    if (/account|sign|log ?in|登入|登录|帳戶|账户/.test(q)) { k = 'account'; }
    if (/companion|旅伴/.test(q)) { k = 'companions'; links = ['companions']; }
    if (/culture tree|文化樹|文化树/.test(q)) { k = 'tree'; links = ['tree']; }
    if (/privacy|data|私隱|隐私/.test(q)) { k = 'data'; }
    var h = P(esc(tx(A[k]))), c = links.map(function (l) { return { l: D.ui.links[l], h: l === 'tree' ? 'culture-tree.html' : '#' + l }; });
    return ans(h, c.concat(['stamps', 'rewards', 'account'].map(chip)));
  }
  function aTips() {
    var L = D.ui;
    return ans(P(esc(tx(L.tips_h))) + '<ul class="eg-list">' + L.tips.map(function (t) { return '<li>' + esc(tx(t)) + '</li>'; }).join('') + '</ul>', ['eat', 'see', 'plan'].map(chip));
  }
  function aSurprise() {
    var p = pick(D.pl), fd = pick(D.food), L = D.ui;
    return ans(P(esc(tx(L.surprise_intro))) + card({ img: p.img, t: tx(p.n), m: tx(p.h), b: tx(p.b) }) + card({ img: fd.img, t: tx(fd.n), m: fd.p + ' · ' + tx(fd.ty), b: tx(fd.b) }), ['surprise', 'plan', 'stay'].map(chip));
  }

  function answer(text) {
    var q = text.toLowerCase().trim(), L = D.ui, f = flags(q), pi = placeIdx(q), n = dayCount(q);
    var home = ['eat', 'stay', 'see', 'plan', 'hours', 'stamps'].map(chip);
    if (R.app.test(q)) return aApp(q);
    if (R.hours.test(q)) return aHours(pi);
    if (R.hotel.test(q)) return aHotel(q, f, pi);
    if (R.food.test(q)) return aFood(q, f, pi);
    if (R.trip.test(q) || n) return aTrip(q, f, n);
    if (pi >= 0) return aPlaceDetail(pi);
    if (R.place.test(q) || PT.some(function (t) { return t[0].test(q); })) return aPlaces(q, f);
    if (R.tips.test(q)) return aTips();
    if (R.cities.test(q)) return ans(P(esc(tx(L.cities))), [{ l: L.links.tree, h: 'culture-tree.html' }].concat(['plan', 'see'].map(chip)));
    if (R.thanks.test(q)) return ans(P(esc(tx(L.thanks))), ['plan', 'eat', 'stay'].map(chip));
    if (R.who.test(q)) return ans(P(esc(tx(L.who))), home);
    if (R.surprise.test(q)) return aSurprise();
    if (R.greet.test(q)) return ans(P(esc(tx(L.greet))), home);
    return ans(P(esc(tx(L.fallback))), home);
  }

  /* ---------- chips, navigation, sending ---------- */
  function nav(h) {
    close();
    if (h.charAt(0) === '#') { if (isMain) location.hash = h.slice(1); else location.href = 'culturelink.html' + h; }
    else location.href = h;
  }
  function setChips(arr) {
    chipsEl.innerHTML = '';
    arr.forEach(function (c) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = tx(c.l);
      b.onclick = function () { if (c.h) nav(c.h); else send(tx(c.q)); };
      chipsEl.appendChild(b);
    });
  }
  var busy = false;
  function reply(text) {
    var dots = bubble('b', '<span class="eg-dots" aria-label="…"><i></i><i></i><i></i></span>');
    function show(r) {
      dots.remove(); hist.push({ w: 'b', h: r.h }); saveHist(); bubble('b', r.h); setChips(r.c); busy = false; input.focus();
    }
    var wait = reduce ? 100 : 450 + Math.random() * 350;
    if (window.EGUIDE_ENDPOINT) {
      var h = hist.slice(-6).map(function (m) { return { role: m.w === 'u' ? 'user' : 'assistant', text: m.h.replace(/<[^>]+>/g, ' ') }; });
      fetch(window.EGUIDE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, locale: LANGS[loc()], history: h }) })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (!j || typeof j.reply !== 'string') throw 0; show({ h: '<p>' + esc(j.reply).replace(/\n/g, '<br>') + '</p>', c: ['eat', 'stay', 'see', 'plan'].map(chip) }); })
        .catch(function () { setTimeout(function () { show(answer(text)); }, wait); });
    } else setTimeout(function () { show(answer(text)); }, wait);
  }
  function send(text) {
    text = (text || '').trim(); if (!text || busy) return;
    busy = true; push('u', esc(text)); input.value = ''; reply(text);
  }
  form.addEventListener('submit', function (e) { e.preventDefault(); send(input.value); });

  /* ---------- open / close ---------- */
  function open() {
    panel.hidden = false; launch.setAttribute('aria-expanded', 'true'); launch.style.visibility = 'hidden';
    if (!log.children.length) {
      if (hist.length) hist.forEach(function (m) { bubble(m.w, m.h); });
      else { var w = D.ui.welcome; hist.push({ w: 'b', h: P(esc(tx(w))) }); saveHist(); bubble('b', P(esc(tx(w)))); }
      setChips(['eat', 'stay', 'see', 'plan', 'hours', 'stamps', 'tips', 'surprise'].map(chip));
    }
    log.scrollTop = log.scrollHeight; input.focus();
  }
  function close() { panel.hidden = true; launch.setAttribute('aria-expanded', 'false'); launch.style.visibility = ''; }
  launch.addEventListener('click', open);
  $('.eg-x').addEventListener('click', function () { close(); launch.focus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { close(); launch.focus(); } });

  /* keep labels in step with the site's language switcher */
  labels();
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  window.addEventListener('storage', labels);
})();
