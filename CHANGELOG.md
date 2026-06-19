# Changelog

Tất cả thay đổi đáng chú ý của dự án CineHunt được ghi nhận trong tài liệu này.

Định dạng dựa trên Keep a Changelog và phiên bản tuân theo Semantic Versioning.

## [Unreleased]

### Planned

- Hoàn thiện xử lý đồng thời khi nhiều người dùng giữ ghế.
- Mở rộng kiểm thử tự động cho frontend và backend.
- Hoàn thiện trang quản trị.
- Cải thiện tài liệu API và triển khai.

## [0.1.0] - 2026-06-19

### Added

- Khởi tạo phiên bản MVP đầu tiên của hệ thống đặt và săn vé xem phim CineHunt.
- Bổ sung giao diện xem danh sách và thông tin chi tiết phim.
- Bổ sung luồng lựa chọn suất chiếu và ghế.
- Bổ sung các trạng thái ghế `AVAILABLE`, `HELD`, `SOLD` và `BLOCKED` trong tài liệu nghiệp vụ.
- Bổ sung luồng tạo đơn đặt vé và thanh toán giả lập.
- Bổ sung tài liệu phân tích nghiệp vụ, route, layout và test case.

### Changed

- Chuẩn hóa phiên bản frontend thành `0.1.0`.
- Chuẩn hóa tài liệu chuẩn bị GitHub Release đầu tiên.

### Known Issues

- Đây là bản phát hành sớm phục vụ học tập và demo.
- Thanh toán hiện được mô phỏng.
- Một số chức năng quản trị và kiểm thử tự động chưa hoàn thiện.
- API, database schema và cấu hình có thể thay đổi trước `v1.0.0`.
