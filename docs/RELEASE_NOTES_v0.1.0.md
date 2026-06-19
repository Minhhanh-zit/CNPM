# CineHunt v0.1.0 - Initial MVP Release

Đây là phiên bản MVP đầu tiên của CineHunt, hệ thống đặt và săn vé xem phim phục vụ đồ án môn Công nghệ phần mềm.

## Điểm nổi bật

- Luồng xem phim, chọn suất chiếu, chọn ghế, tạo đơn và thanh toán giả lập.
- Tài liệu nghiệp vụ về giữ ghế và hạn chế đặt trùng.
- Route và layout cơ bản cho người dùng và quản trị viên.
- Test case cho chọn ghế, giữ ghế và thanh toán.

## Luồng chính

Movie List -> Movie Detail -> Showtime -> Seat Selection -> Booking -> Mock Payment -> Ticket

## Cài đặt frontend

```bash
git clone https://github.com/Minhhanh-zit/CNPM.git
cd CNPM/frontend
npm ci
npm run dev
```

## Kiểm tra trước phát hành

```bash
cd frontend
npm ci
npm run lint
npm run build
```

## Giới hạn đã biết

- Đây là bản 0.x phục vụ học tập và demo.
- Thanh toán hiện được mô phỏng.
- Một số chức năng quản trị và kiểm thử tự động chưa hoàn thiện.
- API, cấu trúc dữ liệu và cấu hình có thể thay đổi trước v1.0.0.

## Loại phát hành

Khuyến nghị đánh dấu GitHub Release là pre-release.
