# LedArt WiFi — React Native

تطبيق أندرويد/iOS للتحكم في شاشات LED عبر WiFi

## المميزات
- 📡 **WiFi Scan حقيقي** — بيشوف كل شبكات الـ LED المتاحة
- 🔐 **اتصال بباسورد** — تختار الشاشة وتحط الباسورد
- 🎬 **استوديو LED** — نص + صور + فيديو مع 8 تأثيرات
- ⚡ **بروتوكولات** — Art-Net, sACN, WLED, Hyperion, OSC
- 📊 **مراقبة مباشرة** — حالة كل شاشة وبروتوكول
- 🔄 **Native WiFi API** — اتصال حقيقي مش محاكاة

---

## طريقة البناء عبر GitHub Actions

### الخطوة 1 — ارفع على GitHub
1. روح **github.com** → **New Repository**
2. اسم: `ledart-wifi`
3. اضغط **Create repository**
4. ارفع كل الملفات دي

### الخطوة 2 — شغّل الـ Build
1. اضغط تاب **Actions**
2. **Build Android APK** → **Run workflow**
3. انتظر ~8-12 دقيقة ⏳

### الخطوة 3 — نزّل الـ APK
1. افتح الـ workflow ✅
2. **Artifacts** → **LedArt-WiFi-Debug-APK**
3. فك الـ ZIP → انقل الـ APK للموبايل → ثبّته

---

## طريقة الاستخدام

1. افتح التطبيق
2. اضغط تاب **📡 الأجهزة**
3. اضغط **🔍 بحث** — هيدور على شبكات LED
4. اختار اسم شاشتك من القائمة
5. حط الباسورد (الافتراضي: `12345678`)
6. اضغط **🔗 اتصال**
7. روح **🎬 الاستوديو** — اكتب نص أو ارفع صورة
8. اضغط **⚡ إرسال للشاشات** ✅

---

## الأذونات المطلوبة
- `ACCESS_FINE_LOCATION` — لازمة لـ WiFi scan على أندرويد
- `ACCESS_WIFI_STATE` — لقراءة حالة الـ WiFi
- `CHANGE_WIFI_STATE` — للاتصال بالشبكات
- `INTERNET` — للتواصل مع الشاشات

---

## Build محلي (لو عندك Android Studio)
```bash
npm install
cd android && ./gradlew assembleDebug
# الـ APK هيكون في: android/app/build/outputs/apk/debug/
```
