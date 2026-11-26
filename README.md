# Website Đổng Minh Thiện English

Website giới thiệu chương trình học BEACH của Đổng Minh Thiện English.

## Cập nhật nội dung

- **Hotline, địa chỉ, email, mạng xã hội, mã form Tally, danh sách học viên, nội dung 5 khóa BEACH, các con số nổi bật:** sửa trong `assets/js/data.js`. Mọi trang tự cập nhật.
- **Menu và chân trang:** sửa một lần trong `assets/js/site.js`.
- **Màu sắc, phông chữ:** `assets/css/style.css` (phần `:root` ở đầu file).
- **Nội dung riêng từng trang:** file `.html` tương ứng (`index.html`, `beach.html`, `thay-thien.html`, `vi-sao-chon.html`, `giang-vien.html`, `thanh-tich.html`, `lien-he.html`).

Sửa trực tiếp trên GitHub (bấm biểu tượng bút chì ở file → Commit changes); GitHub Pages tự đăng bản mới sau khoảng 1 phút.

## Trang đăng ký

`tu-van.html` và `test-trinh-do.html` nhúng form Tally ngay trong web, nên người dùng không thấy đường link Tally. Muốn đổi form, sửa `tallyTuVan` / `tallyTest` trong `assets/js/data.js` (mã cuối của link `tally.so/r/...`).

## Lưu ý khi cập nhật giao diện

Các file CSS/JS được gắn số phiên bản (`?v=...`) trong từng trang `.html`. Khi sửa `style.css`, `data.js` hoặc `site.js`, đổi số này (ví dụ thành ngày giờ hiện tại) để trình duyệt của khách tải bản mới thay vì bản cũ đã lưu.
