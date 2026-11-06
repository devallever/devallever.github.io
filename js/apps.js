// App data - 用于渲染应用卡片和详情页
// type: 'app' = 应用, 'game' = 游戏
const APPS = [
  {
    id: 9, type: 'app', category: 'fakecall', name: 'FakeCall',
    pkg: 'app.funnyappptech.android.fake.call',
    shortDesc: 'Simulate realistic incoming calls. Customize caller ID, ringtone, wallpaper.',
    longDesc: `FakeCall is a fun and practical virtual call simulator that lets you create realistic fake incoming calls on your Android device — in just a few MB.
Whether you need a quick social excuse to escape an awkward meeting, want to prank your friends, or just enjoy a silly idol-themed morning call, FakeCall has you covered.

✨ Key Features
• Ultra-Lightweight — The entire app is only a few MB. Install it in seconds, even on slow connections.
• One-Tap Escape — Trigger a default fake call instantly with a single tap. No setup needed for quick emergencies.
• Fully Customizable Caller — Set any contact name, phone number, location label, avatar, ringtone, and vibration pattern. Make it look like whoever you want.
• Custom Ringtones & Wallpapers — Choose from system ringtones or import your own. Switch between multiple beautiful call screen themes to match different scenarios.
• Scheduled Calls — Set a countdown timer (2s, 15s, 30s, or 1 minute) and let the call arrive exactly when you need it.
• Realistic Call Screens — High-fidelity call interface with answer/reject buttons, call duration display, and smooth call-in transition.
• Repeat Mode — Set the fake call to ring multiple times at custom intervals for extra authenticity.

🎯 Perfect For
- Escaping awkward situations (boring meetings, uncomfortable conversations, blind dates)
- Pranking friends with a "surprise call" from a celebrity or mutual acquaintance
- Fun with friends at parties and gatherings
- Practicing call handling or demonstrating apps

🔒 Your Privacy, Respected
FakeCall is designed with privacy in mind:
• No sign-up or account required
• Your settings stay on your device only
• Does not read your full contacts book — uses the system contact picker
• No phone dialing — no actual calls are made

⚠️ Disclaimer
FakeCall is intended for entertainment purposes only. It does not make real phone calls, send messages, or connect to any real phone network. Please use it responsibly and do not use it to harass, scam, or deceive others.

Download now — it's just a few MB!
Need help or have feedback? Email us at funnyappptech@hotmail.com`,
    icon: 'app/fakecall/image/logo.webp',
    banner: 'app/fakecall/image/banner.webp',
    screens: ['app/fakecall/image/screen/01.webp','app/fakecall/image/screen/02.webp','app/fakecall/image/screen/03.webp','app/fakecall/image/screen/04.webp'],
    privacy: 'https://devallever.github.io/app/fakecall/privacy_policy_en.html'
  },
  {
    id: 6, type: 'app', category: 'cardmaker', name: 'Card Maker',
    pkg: 'com.allever.android.card.text.pic.text',
    shortDesc: 'Make Text To Beautiful Cards !',
    longDesc: `🌟 Make Text To Beautiful Cards!
Transform Words into Stunning Visual Cards in Seconds!

✨ Quick & Magical Card Creation
Got words? Turn them into eye-catching cards! Whether it's a heartfelt message, festive greeting, or social media post, our app instantly converts your text into beautiful, shareable designs. No design skills needed!

✨ KEY FEATURES
✅ Easy Text-to-Card Conversion
Type or paste text → Pick a template → Boom! Your card is ready.
✅ Many Stunning Templates
Media, geek, solid, bento ticket – find the perfect style for every occasion.
✅ Customize Everything
Change colors, fonts and backgrounds, and icon to make your card uniquely yours.
✅ One-Tap Sharing
Share your creations directly to friends.
✅ No Watermarks
Your cards, your art – export clean, professional-quality images.
✅ Works Offline
Design cards anytime, anywhere – no internet needed!`,
    icon: 'app/cardmaker/image/logo.webp', banner: 'app/cardmaker/image/banner.webp',
    screens: ['app/cardmaker/image/screen/01.webp','app/cardmaker/image/screen/02.webp','app/cardmaker/image/screen/03.webp','app/cardmaker/image/screen/04.webp','app/cardmaker/image/screen/05.webp','app/cardmaker/image/screen/06.webp'],
    privacy: 'https://www.privacypolicies.com/live/01bbffb5-0610-43dc-8a1a-ef18de59b3b5'
  },
  {
    id: 7, type: 'app', category: 'qrcode', name: 'QR Scanner',
    pkg: 'app.allever.android.ai.qr.scanner',
    shortDesc: 'Scan, Create & Share Codes Effortlessly',
    longDesc: `QR Scanner: Scan, Create & Share Codes Effortlessly

🔍 Powerful QR & Barcode Scanner
Instantly scan any QR code or barcode! Open websites, sms, view product details, check event info, or decode contact cards — all with a single tap. Works flawlessly in low light and handles damaged codes smartly.

✨ Create Custom QR Codes
Generate stylish QR codes for URLs, text, contacts, events, or messages. Personalize with colors and save/share your creations instantly. You control the content you create.

📚 Organized Scan History
Never lose a scan! Your decoded results are saved locally in a searchable history. Revisit links, contacts, or info anytime. Clear your history easily in settings.

📤 Quick Social Sharing
Found something great? Share scanned results or your custom QR codes directly to messaging apps, email, or social media with one tap.

🛡 Simple & Respectful
We prioritize your privacy:
- Scans happen in real-time; no unwanted data uploads.
- History is stored locally on your device.
- Optional permissions (Camera, Storage for saving images) are clearly explained.

🎯 Key Features:
- QR & barcode scanning
- QR code generation (text, URL, contact, sms + more)
- Local scan history with search & export
- One-tap sharing to social apps/messages
- Works offline (scanning & history)
- User-friendly, minimalist interface

📎 Perfect for: Opening links • Checking prices • Sharing contacts • Saving promotions • Creating event invites • Storing info securely • And much more!

➡️ Get started now — simplify your digital life!`,
    icon: 'app/qrcode/image/logo.webp', banner: 'app/qrcode/image/banner.webp',
    screens: ['app/qrcode/image/screen/01.webp','app/qrcode/image/screen/02.webp','app/qrcode/image/screen/03.webp','app/qrcode/image/screen/04.webp','app/qrcode/image/screen/05.webp','app/qrcode/image/screen/06.webp'],
    privacy: 'https://www.privacypolicies.com/live/9a33dbf9-6d73-4086-8463-dbd0528e6aca'
  },
  {
    id: 1, type: 'app', category: 'devicedetector', name: 'Device Detector',
    pkg: 'app.allever.android.device.detector',
    shortDesc: 'Bluetooth Device Detector & Metal Detector',
    longDesc: `Device Detector can find bluetooth devices and detect nearby metal. Has the following functions:
Find the Bluetooth device: You can search for the location of your Bluetooth device, and you can know the approximate location of the device by calculating the distance according to the Bluetooth semaphore;
Metal detector: you can find keys, find small screws dropped on the carpet, and even find the wires on the wall and other scenes!
NOTE: If your phone compass doesn't have a magnetometer inside it won't work.`,
    icon: 'app/devicedetector/image/logo.webp', banner: null,
    screens: ['app/devicedetector/image/screen/01.webp','app/devicedetector/image/screen/02.webp','app/devicedetector/image/screen/03.webp','app/devicedetector/image/screen/04.webp'],
    privacy: 'https://www.privacypolicies.com/live/6cbbcc52-edb4-4e6b-bb5d-60f9d00646eb'
  },
  {
    id: 2, type: 'app', category: 'justnote', name: 'Just Note',
    pkg: 'app.allever.android.note.just',
    shortDesc: 'A Beautiful and Simple Note App',
    longDesc: `Just Note is a Beautiful simple and intuitive App that allows you to create, manage, and organize your notes on Android devices. Whether you need to jot down ideas, make to-do lists, or keep track of important information, this app provides a convenient and efficient way to do so.
- Note Creation and Editing
- Search and Filters
- Offline Access
- Dark Mode`,
    icon: 'app/justnote/image/logo.webp', banner: null,
    screens: ['app/justnote/image/screen/01.webp','app/justnote/image/screen/02.webp','app/justnote/image/screen/03.webp','app/justnote/image/screen/04.webp','app/justnote/image/screen/05.webp'],
    privacy: 'https://www.privacypolicies.com/live/4a1b2907-6930-4bdd-bb40-5d212ddac6fa'
  },
  {
    id: 8, type: 'app', category: 'gif', name: 'Gif Memes',
    pkg: 'app.funny.tech.gif.memes',
    shortDesc: 'recommend & search & download gif',
    longDesc: `Gif Memes is funny app to get all list of Gif Memes.
App contains following features.

1)👍 List of Hot gifs memes.
2)😍 Search your like for gifs using keyword.
3)😎 Collect your Gif memes.
4)😉Share on social media platforms.
5)😃Save Gif to local
6)🦾Create your gif memes（Video to Gif）`,
    icon: 'app/gif/image/logo.webp', banner: null,
    screens: ['app/gif/image/screen/01.webp','app/gif/image/screen/02.webp','app/gif/image/screen/03.webp','app/gif/image/screen/04.webp','app/gif/image/screen/05.webp'],
    privacy: 'https://www.privacypolicies.com/live/47b211fa-e117-4830-804f-5889e952facb'
  },
  {
    id: 5, type: 'app', category: 'waterremider', name: 'Water Reminder',
    pkg: 'app.allever.android.water.reminder',
    shortDesc: 'Stay Hydrated, Stay Healthy: Your Personal Water Tracking Companion.',
    longDesc: `Easy to use, beautiful interface.

Based on weight will let you know how much water should drink a day.
Human body graphics to drinking water tracker
Can choose the amount of water each time.
Smart reminder: time mode go to bed so you don't get drink water reminder.`,
    icon: 'app/waterremider/image/logo.webp', banner: 'app/waterremider/image/banner.webp',
    screens: ['app/waterremider/image/screen/01.webp','app/waterremider/image/screen/02.webp','app/waterremider/image/screen/03.webp','app/waterremider/image/screen/04.webp'],
    privacy: 'https://www.privacypolicies.com/live/4ab60ab4-4c6c-474e-91fb-1dbead41f23a'
  },
  {
    id: 4, type: 'game', category: 'linklinkgame', name: 'Animal Link',
    pkg: 'app.allever.android.game.linklinkgame',
    shortDesc: 'Countless beautifully designed levels await you to challenge!',
    longDesc: `Countless beautifully designed levels await you to challenge!

Animal Link is a popular connection elimination puzzle game. You can play this game for free on your phone and tablet. Animal Link's massive levels allow you to exercise your brain and memory while playing games, and it is also the most popular toilet game.

How to play?
★ The goal of the game is to eliminate all blocks on the chessboard by linking identical graphic blocks.
★ Find the same block and eliminate it within three segments of the line.
★ Maintain brain alertness while relaxing, entertaining, and relieving stress.

Feature
★ Simple and fun game mechanics
★ Combining Classic Mahjong Lianliankan with New Game Mechanisms
★ Use props to quickly clear levels

Amazing and unique artistic design
★ All tiles are rendered using 3D models
★ Designed many exquisite themes

Why Play Animal Link?
★ Free offline single player game
★ Exercise your brain. If you cannot find a block that can be eliminated, you can use refresh and prompts`,
    icon: 'app/linklinkgame/image/logo.webp', banner: null,
    screens: ['app/linklinkgame/image/screen/01.webp','app/linklinkgame/image/screen/02.webp','app/linklinkgame/image/screen/03.webp','app/linklinkgame/image/screen/04.webp','app/linklinkgame/image/screen/05.webp','app/linklinkgame/image/screen/06.webp','app/linklinkgame/image/screen/07.webp'],
    privacy: 'https://www.privacypolicies.com/live/050e29ae-f3b1-4d1b-b651-f639ea3ed45f'
  },
  {
    id: 3, type: 'game', category: 'memorykitties', name: 'Kitties Memory Game',
    pkg: 'app.allever.android.game.memory.kitties',
    shortDesc: 'Memory game, challenge and exercise brain memory',
    longDesc: `A memory game where you have to find matching pictures in a matching game. Play this matching game, improve your memory and concentration and sharpen your memory. This is the classic memo board game that is simple, addictive and relaxing.

Two modes: casual mode and challenge mode

Memorize, match and solve card puzzles!`,
    icon: 'app/memorykitties/image/logo.webp', banner: null,
    screens: ['app/memorykitties/image/screen/01.png','app/memorykitties/image/screen/02.png','app/memorykitties/image/screen/03.png','app/memorykitties/image/screen/04.png'],
    privacy: 'https://www.privacypolicies.com/live/eb6c5ceb-09b3-4674-880f-3cc4eafc3e88'
  }
];

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=';

function getPlayStoreUrl(pkg) {
  return PLAY_STORE_URL + pkg;
}

function getAppByCategory(category) {
  return APPS.find(a => a.category === category);
}

function getAppsByType(type) {
  return APPS.filter(a => a.type === type);
}
