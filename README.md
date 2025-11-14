# 💧 Water Tracker - Ứng dụng Theo dõi Nước uống

## 👨‍🎓 Thông tin sinh viên

- **Họ và tên:** Nguyễn Trung
- **MSSV:** 22IT318
- **Lớp:** 22SE1
- **Đề bài:** ĐỀ 6 - Ứng dụng Theo dõi Nước uống (Water Tracker)

---

## 📋 Mô tả đề bài

Phát triển ứng dụng theo dõi lượng nước uống hàng ngày với 2 màn hình:

### 1. Màn hình chính:
- Hiển thị tổng số ml nước đã uống trong ngày
- Hiển thị tiến độ đạt mục tiêu (2000ml/ngày)
- Có các nút cộng nhanh: +100ml, +200ml, +300ml

### 2. Màn hình lịch sử:
- Hiển thị danh sách thời gian + lượng nước đã uống
- Thống kê tổng hợp và trung bình

### Yêu cầu kỹ thuật:
- ✅ Sử dụng Capacitor Plugin Storage để lưu dữ liệu
- ✅ Rung nhẹ bằng Capacitor Haptics khi bấm nút
- ✅ Giao diện đơn giản, màu tươi sáng
- ✅ Tự động reset dữ liệu vào ngày mới

---

## 🚀 Công nghệ sử dụng

- **Framework:** Ionic React
- **Language:** TypeScript
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Capacitor Preferences (Storage Plugin)
- **Haptics:** Capacitor Haptics
- **Icons:** Lucide React, Ionicons
- **Styling:** CSS + Ionic Components

---

## 🛠️ Cài đặt và Chạy ứng dụng

### Yêu cầu hệ thống:
- Node.js >= 16.x
- npm >= 8.x
- Ionic CLI >= 7.x
- (Tùy chọn) Android Studio cho Android
- (Tùy chọn) Xcode cho iOS (chỉ trên macOS)

### 1️⃣ Clone và cài đặt dependencies

```bash
# Clone repository (hoặc giải nén file zip)
cd water-tracker

# Cài đặt dependencies
npm install

# Cài đặt Ionic CLI (nếu chưa có)
npm install -g @ionic/cli
```

### 2️⃣ Chạy trên Web Browser (Cách nhanh nhất)

```bash
# Chạy development server
ionic serve

# Hoặc
npm start
```

Ứng dụng sẽ mở tại: `http://localhost:8100`

### 3️⃣ Chạy trên Android Emulator

```bash
# Thêm platform Android (chỉ làm 1 lần)
ionic capacitor add android

# Build ứng dụng
ionic build

# Sync với Capacitor
npx cap sync

# Mở Android Studio
npx cap open android
```

Trong Android Studio:
1. Đợi Gradle build hoàn tất
2. Chọn emulator từ dropdown
3. Click nút Run (▶️)

### 4️⃣ Chạy trên điện thoại Android thật

**Chuẩn bị điện thoại:**
1. Vào Settings → About phone
2. Chạm 7 lần vào "Build number" để bật Developer options
3. Vào Developer options → Bật "USB debugging"
4. Cắm điện thoại vào máy tính

**Chạy ứng dụng:**
```bash
# Build và sync
ionic build
npx cap sync

# Chạy trên thiết bị
npx cap open android
```

Trong Android Studio, chọn tên điện thoại của bạn và click Run.

### 5️⃣ Chạy trên iOS (chỉ trên macOS)

```bash
# Thêm platform iOS
ionic capacitor add ios

# Build và sync
ionic build
npx cap sync

# Mở Xcode
npx cap open ios
```

Trong Xcode:
1. Chọn team signing
2. Chọn simulator hoặc thiết bị
3. Click Run (▶️)

---

## ✨ Tính năng chính

### 🏠 Màn hình chính
- ✅ **Vòng tròn tiến độ SVG** với animation mượt mà
- ✅ **Hiển thị tổng ml nước** đã uống trong ngày
- ✅ **Phần trăm hoàn thành** mục tiêu 2000ml
- ✅ **Số ly nước** đã uống (1 ly = 250ml)
- ✅ **3 nút thêm nhanh:**
  - +100ml (Nửa cốc)
  - +200ml (Một cốc nhỏ)
  - +300ml (Một chai lớn)
- ✅ **Haptic feedback** khi bấm nút (rung nhẹ)
- ✅ **Thanh tiến độ** chi tiết
- ✅ **Nút reset** dữ liệu

### 📜 Màn hình lịch sử
- ✅ **Tổng số lần uống** trong ngày
- ✅ **Danh sách chi tiết** với thời gian và lượng nước
- ✅ **Thống kê:**
  - Tổng lượng nước đã uống
  - Lượng nước trung bình mỗi lần
- ✅ **Thông báo khuyến khích** dựa trên tiến độ
- ✅ **Hiển thị trạng thái** khi chưa có dữ liệu

### 💾 Storage (Lưu trữ dữ liệu)
- ✅ Lưu tổng lượng nước
- ✅ Lưu lịch sử chi tiết từng lần uống
- ✅ Lưu ngày hiện tại
- ✅ **Tự động reset** khi sang ngày mới
- ✅ Dữ liệu **không mất** khi tắt/mở lại app
- ✅ Sử dụng **Capacitor Preferences** (Storage API)

### 🎨 Giao diện
- ✅ **Màu sắc tươi sáng:** Gradient xanh dương, cyan, teal
- ✅ **Animation mượt mà:** Transition, hover effects
- ✅ **Icons rõ ràng:** Droplets, History, Clock, Plus
- ✅ **Responsive:** Tương thích mọi kích thước màn hình
- ✅ **Modern UI:** Rounded corners, shadows, gradients
- ✅ **Tab navigation:** Dễ dàng chuyển đổi giữa 2 màn hình


---

## 📦 Dependencies chính

```json
{
  "@capacitor/android": "^6.0.0",
  "@capacitor/app": "^6.0.0",
  "@capacitor/core": "^6.0.0",
  "@capacitor/haptics": "^6.0.0",
  "@capacitor/preferences": "^6.0.0",
  "@ionic/react": "^8.0.0",
  "@ionic/react-router": "^8.0.0",
  "ionicons": "^7.0.0",
  "lucide-react": "^0.263.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router": "^5.3.4"
}
```
---

## 🚀 Tính năng nâng cao (bonus)

- ✅ **Animation mượt mà:** Vòng tròn, thanh tiến độ
- ✅ **Responsive design:** Hoạt động tốt mọi màn hình
- ✅ **TypeScript:** Type safety cho toàn bộ code
- ✅ **Error handling:** Try-catch cho Storage operations
- ✅ **Empty states:** UI khi không có dữ liệu
- ✅ **Confirmation dialog:** Xác nhận trước khi reset
- ✅ **Statistics:** Tính trung bình, phần trăm, số ly
- ✅ **Motivational messages:** Khuyến khích người dùng


---

## 📄 License

MIT License - Dự án môn học Ionic/Capacitor



---

Made with 💧 and ❤️ by Nguyễn Trung
