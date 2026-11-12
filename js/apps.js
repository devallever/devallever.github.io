// App data - 从 recommend.json 动态加载（file:// 协议下自动回退到内联数据）
// 根据当前页面路径智能计算 JSON 地址：
// - 根目录页面（如 index.html）→ business/recommend/recommend.json
// - 子目录页面（如 apps/cardmaker.html）→ ../business/recommend/recommend.json
function getRecommendJsonUrl() {
  const path = location.pathname;
  if (path.includes('/apps/') || path.startsWith('/apps') || path.includes('/blog/')) {
    return '../business/recommend/recommend.json';
  }
  return 'business/recommend/recommend.json';
}

// fetch 失败时的兜底数据（file:// 协议或离线场景）
const FALLBACK_DATA = [
  {
    "id": 9,
    "category": "fakecall",
    "pkg": "app.funnyappptech.android.fake.call",
    "size": "1MB",
    "name": "FakeCall",
    "desc": "FakeCall — Virtual Call Simulator",
    "longDesc": " FakeCall is a fun and practical virtual call simulator that lets you create realistic fake incoming calls on your Android device — in just a few MB.\n  Whether you need a quick social excuse to escape an awkward meeting, want to prank your friends, or just enjoy a silly idol-themed morning call, FakeCall has you covered.\n  ✨ Key Features\n  • Ultra-Lightweight — The entire app is only a few MB. Install it in seconds, even on slow connections.\n  • One-Tap Escape — Trigger a default fake call instantly with a single tap. No setup needed for quick emergencies.\n  • Fully Customizable Caller — Set any contact name, phone number, location label, avatar, ringtone, and vibration pattern. Make it look like whoever you want.\n  • Custom Ringtones & Wallpapers — Choose from system ringtones or import your own. Switch between multiple beautiful call screen themes to match different scenarios.\n  • Scheduled Calls — Set a countdown timer (2s, 15s, 30s, or 1 minute) and let the call arrive exactly when you need it.\n  • Realistic Call Screens — High-fidelity call interface with answer/reject buttons, call duration display, and smooth call-in transition.\n  • Repeat Mode — Set the fake call to ring multiple times at custom intervals for extra authenticity.\n  🎯 Perfect For\n- Escaping awkward situations (boring meetings, uncomfortable conversations, blind dates)\n- Pranking friends with a \"surprise call\" from a celebrity or mutual acquaintance\n- Fun with friends at parties and gatherings\n- Practicing call handling or demonstrating apps\n  🔒 Your Privacy, Respected\n  FakeCall is designed with privacy in mind:\n  • No sign-up or account required\n  • Your settings stay on your device only\n  • Does not read your full contacts book — uses the system contact picker\n  • No phone dialing — no actual calls are made\n  ⚠️ Disclaimer\n  FakeCall is intended for entertainment purposes only. It does not make real phone calls, send messages, or connect to any real phone network. Please use it responsibly and do not use it to harass, scam, or deceive others.\n  Download now — it's just a few MB!\n  Need help or have feedback? Email us at funnyappptech@hotmail.com",
    "iconUrl": "https://devallever.github.io/app/fakecall/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/fakecall/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/fakecall/image/screen/01.webp",
      "https://devallever.github.io/app/fakecall/image/screen/02.webp",
      "https://devallever.github.io/app/fakecall/image/screen/03.webp",
      "https://devallever.github.io/app/fakecall/image/screen/04.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 1,
    "category": "devicedetector",
    "pkg": "app.allever.android.device.detector",
    "size": "1MB",
    "name": "Device Detector",
    "desc": "Bluetooth Device Detector & Metal Detector",
    "longDesc": "  Device Detector can find bluetooth devices and detect nearby metal. Has the following functions:\n  Find the Bluetooth device: You can search for the location of your Bluetooth device, and you can know the approximate location of the device by calculating the distance according to the Bluetooth semaphore;\n  Metal detector: you can find keys, find small screws dropped on the carpet, and even find the wires on the wall and other scenes!\n  NOTE: If your phone compass doesn't have a magnetometer inside it won't work.",
    "iconUrl": "https://devallever.github.io/app/devicedetector/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/devicedetector/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/devicedetector/image/screen/01.webp",
      "https://devallever.github.io/app/devicedetector/image/screen/02.webp",
      "https://devallever.github.io/app/devicedetector/image/screen/03.webp",
      "https://devallever.github.io/app/devicedetector/image/screen/04.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 2,
    "category": "justnote",
    "pkg": "app.allever.android.note.just",
    "size": "1MB",
    "name": "Just Note",
    "desc": "Just Note - Simple Note App",
    "longDesc": "Just Note is a Beautiful simple and intuitive App that allows you to create, manage, and organize your notes on Android devices. Whether you need to jot down ideas, make to-do lists, or keep track of important information, this app provides a convenient and efficient way to do so.\n- Note Creation and Editing\n- Search and Filters\n- Offline Access\n- Dark Mode",
    "iconUrl": "https://devallever.github.io/app/justnote/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/justnote/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/justnote/image/screen/01.webp",
      "https://devallever.github.io/app/justnote/image/screen/02.webp",
      "https://devallever.github.io/app/justnote/image/screen/03.webp",
      "https://devallever.github.io/app/justnote/image/screen/04.webp",
      "https://devallever.github.io/app/justnote/image/screen/05.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 6,
    "category": "cardmaker",
    "pkg": "com.allever.android.card.text.pic.text",
    "size": "1MB",
    "name": "Card Maker",
    "desc": "Make Text To Beautiful Cards !",
    "longDesc": "🌟 Make Text To Beautiful Cards!\nTransform Words into Stunning Visual Cards in Seconds!\n\n✨ Quick & Magical Card Creation\nGot words? Turn them into eye-catching cards! Whether it’s a heartfelt message, festive greeting, or social media post, our app instantly converts your text into beautiful, shareable designs. No design skills needed!\n\n✨ KEY FEATURES\n✅ Easy Text-to-Card Conversion\nType or paste text → Pick a template → Boom! Your card is ready.\n✅ Many Stunning Templates\nMedia, geek, solid, bento ticket – find the perfect style for every occasion.\n✅ Customize Everything\nChange colors, fonts and backgrounds, and icon to make your card uniquely yours.\n✅ One-Tap Sharing\nShare your creations directly to friends.\n✅ No Watermarks\nYour cards, your art – export clean, professional-quality images.\n✅ Works Offline\nDesign cards anytime, anywhere – no internet needed!",
    "iconUrl": "https://devallever.github.io/app/cardmaker/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/cardmaker/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/cardmaker/image/screen/01.webp",
      "https://devallever.github.io/app/cardmaker/image/screen/02.webp",
      "https://devallever.github.io/app/cardmaker/image/screen/03.webp",
      "https://devallever.github.io/app/cardmaker/image/screen/04.webp",
      "https://devallever.github.io/app/cardmaker/image/screen/05.webp",
      "https://devallever.github.io/app/cardmaker/image/screen/06.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 8,
    "category": "gif",
    "pkg": "app.funny.tech.gif.memes",
    "size": "1MB",
    "name": "Gif Memes - Maker & Downloader",
    "desc": "recommend & search & download gif",
    "iconUrl": "https://devallever.github.io/app/gif/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/gif/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/gif/image/screen/01.webp",
      "https://devallever.github.io/app/gif/image/screen/02.webp",
      "https://devallever.github.io/app/gif/image/screen/03.webp",
      "https://devallever.github.io/app/gif/image/screen/04.webp"
    ],
    "longDesc": "Gif Memes is funny app to get all list of Gif Memes.\nApp contains following features.\n\n1)👍 List of Hot gifs memes.\n2)😍 Search your like for gifs using keyword.\n3)😎 Collect your Gif memes.\n4)😉Share on social media platforms.\n5)😃Save Gif to local\n6)🦾Create your gif memes（Video to Gif）",
    "version": "v1.0.0"
  },
  {
    "id": 4,
    "category": "linklinkgame",
    "pkg": "app.allever.android.game.linklinkgame",
    "size": "1MB",
    "name": "Link Link Game",
    "desc": "Link Link Game - Challenge your brain",
    "longDesc": "Countless beautifully designed levels await you to challenge!\n\nAnimal Link is a popular connection elimination puzzle game. You can play this game for free on your\nphone and tablet. Animal Link's massive levels allow you to exercise your brain and memory while playing\ngames, and it is also the most popular toilet game.\n\nHow to play?\n★ The goal of the game is to eliminate all blocks on the chessboard by linking identical graphic blocks.\n★ Find the same block and eliminate it within three segments of the line.\n★ Maintain brain alertness while relaxing, entertaining, and relieving stress.\n\nFeature\n★ Simple and fun game mechanics\n★ Combining Classic Mahjong Lianliankan with New Game Mechanisms\n★ Use props to quickly clear levels\n\nAmazing and unique artistic design\n★ All tiles are rendered using 3D models\n★ Designed many exquisite themes\n\nWhy Play Animal Link?\n★ Free offline single player game\n★ Exercise your brain. If you cannot find a block that can be eliminated, you can use refresh and prompts ",
    "iconUrl": "https://devallever.github.io/app/linklinkgame/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/linklinkgame/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/linklinkgame/image/screen/01.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/02.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/03.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/04.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/05.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/06.webp",
      "https://devallever.github.io/app/linklinkgame/image/screen/07.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 3,
    "category": "memorykitties",
    "pkg": "app.allever.android.game.memory.kitties",
    "size": "1MB",
    "name": "Kitties Memory Game",
    "desc": "Kitties Memory Game - Challenge your brain",
    "longDesc": "A memory game where you have to find matching pictures in a matching game. Play this matching game, improve your memory and concentration and sharpen your memory. This is the classic memo board game that is simple, addictive and relaxing.\n\nTwo modes: casual mode and challenge mode\n\nMemorize, match and solve card puzzles!",
    "iconUrl": "https://devallever.github.io/app/memorykitties/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/memorykitties/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/memorykitties/image/screen/01.webp",
      "https://devallever.github.io/app/memorykitties/image/screen/02.webp",
      "https://devallever.github.io/app/memorykitties/image/screen/03.webp",
      "https://devallever.github.io/app/memorykitties/image/screen/04.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 5,
    "category": "waterremider",
    "pkg": "app.allever.android.water.reminder",
    "size": "1MB",
    "name": "Water Reminder",
    "desc": "Water Reminder & Tracking",
    "longDesc": "  Easy to use, beautiful interface.\n\nBased on  weight will let you know how much water should drink a day.\nHuman body graphics to drinking water tracker\nCan choose the amount of water each time.\nSmart reminder: time mode go to bed so you don't get drink water reminder.",
    "iconUrl": "https://devallever.github.io/app/waterremider/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/waterremider/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/waterremider/image/screen/01.webp",
      "https://devallever.github.io/app/waterremider/image/screen/02.webp",
      "https://devallever.github.io/app/waterremider/image/screen/03.webp",
      "https://devallever.github.io/app/waterremider/image/screen/04.webp"
    ],
    "version": "v1.0.0"
  },
  {
    "id": 7,
    "category": "qrcode",
    "pkg": "app.allever.android.ai.qr.scanner",
    "size": "1MB",
    "name": "QR Scanner",
    "desc": "Scan, Create & Share Codes Effortlessly",
    "longDesc": "  QR Scanner: Scan, Create & Share Codes Effortlessly\n  🔍 Powerful QR & Barcode Scanner\n  Instantly scan any QR code or barcode! Open websites, sms, view product details, check event info, or decode contact cards — all with a single tap. Works flawlessly in low light and handles damaged codes smartly.\n  ✨ Create Custom QR Codes\n  Generate stylish QR codes for URLs, text, contacts, events, or messages. Personalize with colors and save/share your creations instantly. You control the content you create.\n  📚 Organized Scan History\n  Never lose a scan! Your decoded results are saved locally in a searchable history. Revisit links, contacts, or info anytime. Clear your history easily in settings.\n  📤 Quick Social Sharing\n  Found something great? Share scanned results or your custom QR codes directly to messaging apps, email, or social media with one tap.\n  🛡 Simple & Respectful\n  We prioritize your privacy:\n- Scans happen in real-time; no unwanted data uploads.\n- History is stored locally on your device.\n- Optional permissions (Camera, Storage for saving images) are clearly explained.🎯 Key Features:\n- QR & barcode scanning\n- QR code generation (text, URL, contact, sms + more)\n- Local scan history with search & export\n- One-tap sharing to social apps/messages\n- Works offline (scanning & history)\n- User-friendly, minimalist interface📎 Perfect for:Opening links • Checking prices • Sharing contacts • Saving promotions • Creating event invites • Storing info securely • And much more!➡️ Get started now — simplify your digital life!",
    "iconUrl": "https://devallever.github.io/app/qrcode/image/logo.webp",
    "bannerUrl": "https://devallever.github.io/app/qrcode/image/banner.webp",
    "screenUrl": [
      "https://devallever.github.io/app/qrcode/image/screen/01.webp",
      "https://devallever.github.io/app/qrcode/image/screen/02.webp",
      "https://devallever.github.io/app/qrcode/image/screen/03.webp",
      "https://devallever.github.io/app/qrcode/image/screen/04.webp",
      "https://devallever.github.io/app/qrcode/image/screen/05.webp",
      "https://devallever.github.io/app/qrcode/image/screen/06.webp"
    ],
    "version": "v1.0.0"
  }
];

// 游戏类别的 category 列表（其余自动归为 app）
const GAME_CATEGORIES = ['linklinkgame', 'memorykitties'];

let _appsCache = null;

/**
 * 把 recommend.json 的原始数据适配成前端使用的统一格式
 */
function adaptApp(raw) {
  return {
    id: raw.id,
    category: raw.category,
    pkg: raw.pkg,
    name: raw.name,
    desc: raw.desc,
    longDesc: raw.longDesc,
    icon: raw.iconUrl,
    banner: raw.bannerUrl,
    screens: raw.screenUrl || [],
    iconUrl: raw.iconUrl,
    bannerUrl: raw.bannerUrl,
    screenUrl: raw.screenUrl || [],
    shortDesc: raw.desc,
    type: GAME_CATEGORIES.includes(raw.category) ? 'game' : 'app',
    version: raw.version,
    size: raw.size,
    privacy: null
  };
}

async function loadApps() {
  if (_appsCache) return _appsCache;
  let rawList = null;
  try {
    const url = getRecommendJsonUrl();
    const res = await fetch(url);
    const json = await res.json();
    rawList = json.data || [];
  } catch (e) {
    // file:// 协议或离线时，使用内联 fallback
    console.warn('[apps.js] fetch recommend.json 失败（可能是 file:// 协议），使用内联数据');
    rawList = FALLBACK_DATA;
  }
  _appsCache = rawList.map(adaptApp);
  return _appsCache;
}

function getApps() {
  return loadApps();
}

function getAppByCategory(category) {
  return loadApps().then(apps => apps.find(a => a.category === category));
}

async function getAppsByType(type) {
  const apps = await loadApps();
  return apps.filter(a => a.type === type);
}

function getPlayStoreUrl(pkg) {
  return 'https://play.google.com/store/apps/details?id=' + pkg;
}

/**
 * 初始化截图轮播
 */
function setupScreenshotCarousel() {
  const track = document.getElementById('screenTrack');
  const prevBtn = document.getElementById('screenPrev');
  const nextBtn = document.getElementById('screenNext');
  const counter = document.getElementById('screenCounter');
  if (!track || !prevBtn || !nextBtn || !counter) return;

  const total = track.children.length;
  if (total === 0) return;
  let currentIdx = 0;

  function scrollToIndex(idx) {
    currentIdx = Math.max(0, Math.min(total - 1, idx));
    const img = track.children[currentIdx];
    if (!img) return;
    const trackRect = track.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const offset = imgRect.left - trackRect.left;
    const centerOffset = offset - (trackRect.width - imgRect.width) / 2;
    track.scrollBy({ left: centerOffset, behavior: 'smooth' });
    updateUI();
  }

  function updateUI() {
    counter.textContent = (currentIdx + 1) + ' / ' + total;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx === total - 1;
  }

  prevBtn.addEventListener('click', () => scrollToIndex(currentIdx - 1));
  nextBtn.addEventListener('click', () => scrollToIndex(currentIdx + 1));

  let wheelTimer = null;
  track.addEventListener('wheel', (e) => {
    if (wheelTimer) clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      if (e.deltaX > 30 || e.deltaY > 30) scrollToIndex(currentIdx + 1);
      else if (e.deltaX < -30 || e.deltaY < -30) scrollToIndex(currentIdx - 1);
    }, 50);
  }, { passive: true });

  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      if (dx < 0) scrollToIndex(currentIdx + 1);
      else scrollToIndex(currentIdx - 1);
    }
  });

  updateUI();
}

/**
 * 初始化详情页 —— 根据 category 从 recommend.json 加载图片并渲染
 */
async function initDetailPage(category) {
  const app = await getAppByCategory(category);
  if (!app) {
    console.warn('[apps.js] 未找到 category=' + category + ' 的应用数据');
    return;
  }

  if (app.bannerUrl) {
    const style = document.createElement('style');
    style.id = 'dynamic-banner-style';
    style.textContent = '.detail-hero::before { background-image: url("' + app.bannerUrl + '") !important; }';
    document.head.appendChild(style);
  }

  const iconImg = document.querySelector('.detail-app-icon img');
  if (iconImg && app.iconUrl) {
    iconImg.src = app.iconUrl;
    iconImg.alt = app.name || '';
  }

  const track = document.getElementById('screenTrack');
  if (track && app.screenUrl && app.screenUrl.length) {
    track.innerHTML = app.screenUrl.map(url =>
      '<img src="' + url + '" alt="Screenshot" loading="lazy">'
    ).join('');
  }

  if (app.screenUrl) {
    const h2 = Array.from(document.querySelectorAll('.detail-card h2'))
      .find(el => el.textContent.includes('Screenshots'));
    if (h2) {
      h2.innerHTML = 'Screenshots <span style="font-weight:400;color:var(--text-light);font-size:14px;">(' + app.screenUrl.length + ' images)</span>';
    }
  }

  setupScreenshotCarousel();
  return app;
}
