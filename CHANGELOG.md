# Changelog

Tất cả thay đổi đáng chú ý của dự án CineHunt được ghi nhận trong tài liệu này.

Định dạng dựa trên Keep a Changelog và phiên bản tuân theo Semantic Versioning.

## [Unreleased]

### Planned

- Hoàn thiện xử lý đồng thời khi nhiều người dùng giữ ghế.
- Mở rộng kiểm thử end-to-end cho frontend và backend.
- Hoàn thiện trang quản trị.
- Cải thiện tài liệu API và triển khai.

## [0.1.1] - 2026-06-23

### Added

- Bổ sung giao diện CineHunt có thể demo thay cho Vite starter mặc định.
- Bổ sung trang chủ, chi tiết phim, chọn ghế, thanh toán giả lập và Not Found.
- Bổ sung automated tests cho nghiệp vụ frontend cốt lõi.
- Bổ sung GitHub Actions chạy cài đặt dependency, lint, test và production build.
- Bổ sung production build artifact từ đúng commit CI.
- Bổ sung Dependabot và release checklist.

### Changed

- Đổi package name thành `cinehunt-frontend`.
- Đồng bộ package version thành `0.1.1`.
- Cải thiện release notes với testing evidence, known issues và traceability.

### Fixed

- Sửa sự không nhất quán giữa Git tag dự kiến và version metadata của frontend.

### Known Issues

- Thanh toán vẫn đang được mô phỏng.
- Automated tests chưa bao phủ end-to-end.
- Một số chức năng quản trị chưa hoàn thiện.

## [0.1.0] - 2026-06-19

### Added

- Khởi tạo phiên bản MVP đầu tiên của hệ thống đặt và săn vé xem phim CineHunt.
- Bổ sung giao diện xem danh sách và thông tin chi tiết phim.
- Bổ sung luồng lựa chọn suất chiếu và ghế.
- Bổ sung các trạng thái ghế `AVAILABLE`, `HELD`, `SOLD` và `BLOCKED` trong tài liệu nghiệp vụ.
- Bổ sung luồng tạo đơn đặt vé và thanh toán giả lập.
- Bổ sung tài liệu phân tích nghiệp vụ, route, layout và test case.

### Changed

- Chuẩn hóa tài liệu chuẩn bị GitHub Release đầu tiên.

### Known Issues

- Đây là bản phát hành sớm phục vụ học tập và demo.
- Thanh toán hiện được mô phỏng.
- Một số chức năng quản trị và kiểm thử tự động chưa hoàn thiện.
- API, database schema và cấu hình có thể thay đổi trước `v1.0.0`.
