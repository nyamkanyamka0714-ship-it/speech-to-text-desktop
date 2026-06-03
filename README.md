# 🎤 Үг оноох Десктоп Апп

![version](https://img.shields.io/badge/version-1.0.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![electron](https://img.shields.io/badge/electron-latest-brightgreen)

**Google Web Speech API ашиглан та хэлсэн үгийг шууд текст болгодог орчин үеийн десктоп апп.**

## ✨ Онцлог

- 🎙️ **Реал-тайм үг оноох** - Google Web Speech API ашиглалгаа
- 🌍 **10+ хэлийн дэмжлэг** - Монгол, Англи, Хятад, Япон, Солонгос, Орос болон бусад
- 📊 **Итгэлцүүрийн үзүүлэлт** - Оноолсон үгийн найдвартай байдлын үзүүлэлт (%)
- 📋 **Хуулах функц** - Үр дүнд хоёр дахь клик дээр clipboard-т хуулна
- ⌨️ **Түр товчлуур** - Space товчолгоор эхлүүлэх/зогсоох, Ctrl+L товчолгоор цэвэрлэх
- 🎨 **Сайн дизайн** - Современ UI/UX дизайн
- 📱 **Мобайл хүсэлтэй** - Ямар ч төхөөрөмжөөр ашиглаж болно
- 🔒 **Аюулгүй** - Electron Context Isolation дэмжалгаа

## 🚀 Эхлүүлэлт

### Шаардлагууд
- **Node.js** 14+ ([download](https://nodejs.org/))
- **npm** эсвэл **yarn**
- **Монитор** (1024x768 эсвэл түүнээс дээш)
- **Микрофон**

### Суулгаал & Ажиллуулах

```bash
# 1. Төсөл хуулах
git clone https://github.com/nyamkanyamka0714-ship-it/speech-to-text-desktop.git
cd speech-to-text-desktop

# 2. Хамаарлыг суулгах
npm install

# 3. Апп ажиллуулах
npm start

# Development горимд (DevTools нээлттэй):
npm run dev
```

## 📖 Хэрэглэх Нь

### Үндсэн урсгал

1. **Апп нээх** - `npm start` гэж командыг бичээд Enter дарна
2. **Хэл сонгох** - Дээд сонголт хэсгээс хэлээ сонгоно
3. **Микрофон зөвшөөрөл** - Эхний удаа ашиглаж байгаа бол ОС-ын зөвшөөрлийг өгнө
4. **🎙️ Эхлүүлэх** - "Эхлүүлэх" товч дарах эсвэл Space товчолгоор
5. **Хэлэх** - Нэрэмжээгээ булаадаж үгээ нэрэлэх
6. **Үр дүн харах** - Хэлж байхдаа текст доороо бүрэн бөглөрөх болно
7. **Зогсоох** - "Зогсоох" товч дарах эсвэл Space товчолгоор
8. **Хуулах** - Үр дүн дээр хоёр дахь клик дээр clipboard-т хуулна

### Түр товчлуур

| Товчлуур | Үйлдэл |
|----------|--------|
| **Space** | Эхлүүлэх / Зогсоох |
| **Ctrl+L** | Цэвэрлэх |
| **Двойной Клик** | Үр дүнийг хуулах |

## 🌍 Дэмжигдсэн Хэлүүд

| Хэл | Код | Флаг |
|-----|------|------|
| Монгол | `mn-MN` | 🇲🇳 |
| English | `en-US` | 🇺🇸 |
| 中文 (Simplified) | `zh-CN` | 🇨🇳 |
| 中文 (Traditional) | `zh-TW` | 🇭🇰 |
| 日本語 | `ja-JP` | 🇯🇵 |
| 한국어 | `ko-KR` | 🇰🇷 |
| Русский | `ru-RU` | 🇷🇺 |
| Español | `es-ES` | 🇪🇸 |
| Français | `fr-FR` | 🇫🇷 |
| Deutsch | `de-DE` | 🇩🇪 |

## 🏗️ Архитектур

```
speech-to-text-desktop/
│
├── main.js              # Electron main process
├── preload.js          # Security preload script
├── renderer.js         # Speech recognition logic
├── index.html          # UI template
├── styles.css          # Styling
│
├── package.json        # Dependencies & build config
├── .gitignore         # Git ignore rules
├── README.md          # This file
│
└── assets/            # (Optional) Icons & resources
    └── icon.png       # App icon
```

## 🔧 Технологи

| Технологи | Зориулалт |
|-----------|-----------|
| **Electron** | Десктоп апп фреймворк |
| **Google Web Speech API** | Үг оноохо AI |
| **HTML5** | User Interface |
| **CSS3** | Стилинг & анимаци |
| **JavaScript** | Үндсэн логик |

## 🛠️ Хөгжүүлэлтийн Орчин

### DevTools нээх
```bash
npm run dev
```

### Нэмэлт команд

```bash
# Build for Windows
npm run build:win

# Build for macOS
npm run build:mac

# Build for Linux
npm run build:linux

# Universal build
npm run build
```

## 🐛 Алдаа засах

### ❌ "Та ямар ч үг хэлсэнгүй" алдаа

**Шалгах:**
1. Микрофон холбогдсон эсэхийг шалгана
2. Микрофон сайн ажиллаж байна эсэхийг шалгана
3. Хоосрохоор 2-3 сек хүлээж оролдона

### 🎤 "Микрофон олдсонгүй" алдаа

**Шалгах:**
1. Микрофон холбогдсон эсэхийг шалгана
2. Апп-ыг микрофон ашиглахын зөвшөөрөл өгсөн эсэхийг шалгана:
   - **Windows**: Settings → Privacy → Microphone
   - **macOS**: System Preferences → Security & Privacy → Microphone
   - **Linux**: Check ALSA/PulseAudio settings
3. Ашигладаг хөтөчний сэтгэгдэл цэвэрлэнэ
4. Апп-ыг дахин ажиллуулна

### 🌐 "Сүлжээний алдаа" алдаа

**Шалгах:**
1. Интернет холболттай байна
2. Google Web Speech API үйлчилгээ үйл ажиллагаатай байна
3. Firewall-д үйлчилгээ зөвшөөрөлтэй байна
4. VPN ашигладаг бол унтраана

### 🔒 Микрофон зөвшөөрлийн асуудал

**Windows:**
```
Settings → Privacy → App permissions → Microphone
→ Найдвартай апп → Микрофон асаах
```

**macOS:**
```
System Preferences → Security & Privacy → Microphone
→ Апп-ыг сонгоно
```

## 📊 Итгэлцүүр Үзүүлэлт

Итгэлцүүр үзүүлэлт нь API-гээс буцаасан утгаас суурилдаг:
- **90-100%**: Маш өндөр найдвартай ✅
- **70-89%**: Өндөр найдвартай ✔️
- **50-69%**: Дунд найдвартай ⚠️
- **< 50%**: Бага найдвартай ❌

## 💡 Зөвлөгөө & Олз

- 🎙️ **Микрофонгүй хүлээх** - Микрофон сайн ажиллахыг хүлээнэ
- 🔊 **Чанга ярих** - Чанга ярихад илүү сайн үр дүн гарна
- 📖 **Ясам ярих** - Сийруулж сайн ярихад илүү сайн сонсогдоно
- 🌍 **Хэл сонгох** - Зөв хэлээ сонгосон эсэхийг шалгана
- 🔇 **Чимээ** - Орчныг чимээгүй байлгана

## 📝 Лицензи

MIT License - Үнэгүй ашиглаж болно

## 🤝 Оруулалт

Оруулалтыг дараах алхамаар хийнэ:

1. Repository-г fork хийнэ
2. Feature branch үүсгэнэ (`git checkout -b feature/AmazingFeature`)
3. Өөрийнхөө өөрчлөлт commit хийнэ (`git commit -m 'Add some AmazingFeature'`)
4. Branch-д push хийнэ (`git push origin feature/AmazingFeature`)
5. Pull Request нээнэ

## 📞 Холбоос

- **GitHub Issues**: [Report bugs](https://github.com/nyamkanyamka0714-ship-it/speech-to-text-desktop/issues)
- **Email**: nyamkanyamka0714@gmail.com

## 🙏 Баалалга

Энэ төслийг ашиглахдаа:
- ⭐ Одноо өгнө
- 🍴 Fork хийнэ
- 📢 Найзуудтайн хуваалцана

## 📚 Нэмэлт нөөц

- [Electron Документ](https://www.electronjs.org/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Google Cloud Speech-to-Text](https://cloud.google.com/speech-to-text)

---

**Амжилттай үг оноолгоорой! 🚀**

*Made with ❤️ by [nyamkanyamka0714-ship-it](https://github.com/nyamkanyamka0714-ship-it)*
