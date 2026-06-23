# Security Policy

## Supported Versions

CineHunt hiện đang ở giai đoạn pre-release. Nhóm chỉ hỗ trợ sửa lỗi bảo mật trên phiên bản mới nhất được phát hành.

| Version | Supported |
|---|---|
| 0.1.x | Yes |
| < 0.1.0 | No |

## Reporting a Vulnerability

Không đăng token, mật khẩu, API key hoặc dữ liệu người dùng nhạy cảm trong GitHub Issue công khai.

Khi phát hiện vấn đề bảo mật:

1. Liên hệ trực tiếp repository owner `@Minhhanh-zit` qua kênh riêng tư.
2. Cung cấp mô tả lỗi, bước tái hiện, phạm vi ảnh hưởng và bằng chứng cần thiết.
3. Không công khai chi tiết khai thác trước khi nhóm xác nhận và phát hành bản sửa lỗi.

## Security Expectations

- Không commit secret hoặc thông tin xác thực vào repository.
- Sử dụng biến môi trường cho cấu hình nhạy cảm.
- Kiểm tra dependency định kỳ bằng Dependabot và công cụ audit phù hợp.
- Xác thực đầu vào và kiểm tra quyền trước các thao tác quản trị.
- Không phát hành vé khi thanh toán chưa được xác nhận thành công.
- Không để hai người dùng mua cùng một ghế trong cùng suất chiếu.

## Current Limitations

- Thanh toán hiện là mô phỏng và không xử lý dữ liệu thẻ thật.
- Repository chưa được đánh giá bảo mật độc lập.
- Các phiên bản trước `v1.0.0` có thể thay đổi API và cấu trúc dữ liệu.
