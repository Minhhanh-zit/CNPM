# BỘ TEST CASE TRANG CHỦ - ISSUE #46

## Thông tin chung

- Parent issue: #35
- Người phụ trách: BA/DA - Minhhanh-zit
- Mục tiêu: kiểm thử banner, danh sách phim, phim đang chiếu, phim sắp chiếu, tìm kiếm và điều hướng sang chi tiết phim.

## Giả định nghiệp vụ

1. Khách chưa đăng nhập vẫn xem được trang chủ và chi tiết phim.
2. Dữ liệu phim được lấy từ backend; frontend không tự sinh phim giả.
3. Phim đang chiếu và sắp chiếu phải được phân loại theo cùng quy tắc giữa frontend và backend.
4. Phim bị ẩn hoặc vô hiệu hóa không xuất hiện trên trang chủ.
5. Tìm kiếm theo tên phim, không phân biệt hoa thường và bỏ khoảng trắng thừa.
6. Phim sắp chiếu chưa có suất chiếu không được đi tiếp vào flow đặt vé.

## Test case chi tiết

| ID | Nhóm | Nội dung kiểm thử | Tiền điều kiện | Bước thực hiện | Kết quả mong đợi | Ưu tiên |
|---|---|---|---|---|---|---|
| TC-HOME-001 | Chung | Truy cập trang chủ | Hệ thống hoạt động | Mở route trang chủ | Trang tải thành công, không trắng trang | High |
| TC-HOME-002 | Banner | Hiển thị banner | Có dữ liệu banner | Mở trang chủ | Banner đúng nội dung và vị trí | High |
| TC-HOME-003 | Banner | Ảnh banner hợp lệ | Có URL ảnh | Quan sát banner | Ảnh không vỡ, méo hoặc che menu | Medium |
| TC-HOME-004 | Banner | Nút CTA banner | Banner có CTA | Bấm CTA | Điều hướng đến đúng route cấu hình | Medium |
| TC-HOME-005 | Phim | Hiển thị danh sách phim | Backend có dữ liệu | Mở trang chủ | Danh sách phim xuất hiện đầy đủ | High |
| TC-HOME-006 | Phim | Hiển thị thông tin thẻ phim | Có phim hợp lệ | Quan sát thẻ phim | Tên, poster, thể loại, thời lượng, độ tuổi đúng dữ liệu | High |
| TC-HOME-007 | Phim | Không hiển thị phim bị ẩn | Có phim bị vô hiệu hóa | Mở trang chủ | Phim bị ẩn không xuất hiện | High |
| TC-HOME-008 | Phim | Poster lỗi | Phim thiếu hoặc sai URL poster | Mở trang chủ | Có ảnh thay thế, bố cục không vỡ | Medium |
| TC-HOME-009 | Trạng thái | Loading khi tải phim | API phản hồi chậm | Mở trang chủ | Có loading hoặc skeleton rõ ràng | Medium |
| TC-HOME-010 | Trạng thái | Danh sách rỗng | Backend trả mảng rỗng | Mở trang chủ | Hiển thị thông báo chưa có phim | High |
| TC-HOME-011 | Trạng thái | API lỗi | Backend trả lỗi | Mở trang chủ | Hiển thị thông báo lỗi, không vỡ giao diện | High |
| TC-HOME-012 | Đang chiếu | Hiển thị phim đang chiếu | Có phim đang chiếu | Chọn mục Đang chiếu | Chỉ phim đang chiếu được hiển thị | High |
| TC-HOME-013 | Đang chiếu | Không lẫn phim sắp chiếu | Có hai nhóm phim | Chọn mục Đang chiếu | Không xuất hiện phim sắp chiếu | High |
| TC-HOME-014 | Sắp chiếu | Hiển thị phim sắp chiếu | Có phim sắp chiếu | Chọn mục Sắp chiếu | Chỉ phim sắp chiếu được hiển thị | High |
| TC-HOME-015 | Sắp chiếu | Ngày khởi chiếu | Phim có ngày phát hành | Quan sát thẻ phim | Ngày hiển thị đúng định dạng và dữ liệu | Medium |
| TC-HOME-016 | Sắp chiếu | Chặn đặt vé khi chưa có suất | Phim chưa có lịch chiếu | Bấm Đặt vé | Không cho đặt và có thông báo phù hợp | High |
| TC-HOME-017 | Tìm kiếm | Tìm tên đầy đủ | Có phim phù hợp | Nhập đầy đủ tên phim | Trả đúng phim | High |
| TC-HOME-018 | Tìm kiếm | Tìm một phần tên | Có phim chứa từ khóa | Nhập một phần tên | Trả các phim phù hợp | High |
| TC-HOME-019 | Tìm kiếm | Không phân biệt hoa thường | Có phim phù hợp | Nhập tên với kiểu chữ khác | Kết quả không thay đổi | Medium |
| TC-HOME-020 | Tìm kiếm | Loại bỏ khoảng trắng | Có phim phù hợp | Nhập từ khóa có khoảng trắng đầu/cuối | Trả đúng kết quả | Medium |
| TC-HOME-021 | Tìm kiếm | Không tìm thấy phim | Không có phim phù hợp | Nhập từ khóa không tồn tại | Hiển thị thông báo không tìm thấy | High |
| TC-HOME-022 | Tìm kiếm | Từ khóa trống | Danh sách đã tải | Xóa toàn bộ từ khóa | Hiển thị lại danh sách ban đầu | Medium |
| TC-HOME-023 | Điều hướng | Bấm poster phim | Có phim trong danh sách | Bấm poster | Mở đúng trang chi tiết phim | High |
| TC-HOME-024 | Điều hướng | Bấm tên hoặc nút Chi tiết | Có phim trong danh sách | Bấm tên/nút | Mở đúng trang chi tiết phim | High |
| TC-HOME-025 | Điều hướng | Kiểm tra ID hoặc slug | Đã chọn phim | Kiểm tra URL | URL khớp phim được chọn | High |
| TC-HOME-026 | Điều hướng | Phim không tồn tại | ID/slug sai | Truy cập URL trực tiếp | Hiển thị 404 hoặc thông báo phù hợp | High |
| TC-HOME-027 | Responsive | Desktop | Viewport desktop | Mở trang chủ | Bố cục cân đối, không chồng lấn | Medium |
| TC-HOME-028 | Responsive | Tablet | Viewport tablet | Mở trang chủ | Bố cục co giãn và thao tác được | Medium |
| TC-HOME-029 | Responsive | Mobile | Viewport mobile | Mở trang chủ | Không tràn ngang, chức năng vẫn dùng được | High |
| TC-HOME-030 | Dữ liệu | Không tự sinh phim giả | Backend trả rỗng/lỗi | Mở trang chủ | Không xuất hiện dữ liệu ngoài phản hồi backend | High |

## Ma trận bao phủ yêu cầu

| Yêu cầu | Test case |
|---|---|
| Banner | TC-HOME-002 đến TC-HOME-004 |
| Danh sách phim | TC-HOME-005 đến TC-HOME-011 |
| Phim đang chiếu | TC-HOME-012 đến TC-HOME-013 |
| Phim sắp chiếu | TC-HOME-014 đến TC-HOME-016 |
| Tìm kiếm | TC-HOME-017 đến TC-HOME-022 |
| Điều hướng chi tiết | TC-HOME-023 đến TC-HOME-026 |
| Giao diện và dữ liệu | TC-HOME-027 đến TC-HOME-030 |

## Review nghiệp vụ

- Cần tách rõ nhóm Đang chiếu và Sắp chiếu.
- Quy tắc phân loại phải thống nhất giữa frontend và backend.
- Phim sắp chiếu chưa có suất không được đặt vé.
- Tìm kiếm phải xử lý hoa thường và khoảng trắng thừa.
- Route chi tiết phải dùng đúng ID hoặc slug.
- Cần có trạng thái loading, empty và error.
- Frontend không được tự tạo dữ liệu phim giả.

## Mẫu ghi nhận lỗi

| Mã lỗi | Mô tả | Bước tái hiện | Kết quả thực tế | Kết quả mong đợi | Mức độ | Trạng thái |
|---|---|---|---|---|---|---|
| BUG-HOME-XXX | Mô tả lỗi | Các bước cụ thể | Hành vi đang xảy ra | Hành vi đúng | Critical/High/Medium/Low | Open/Fixed/Retest |

## Tiêu chí hoàn thành

- [x] Có 30 test case rõ tiền điều kiện, bước thực hiện và kết quả mong đợi.
- [x] Bao phủ toàn bộ task của Issue #46.
- [x] Có tình huống loading, empty, error và responsive.
- [x] Có ma trận truy vết yêu cầu.
- [x] Có review note nghiệp vụ.
- [x] Có mẫu ghi nhận lỗi.

## Ghi chú thực thi

Tài liệu hoàn thành ở mức thiết kế test case và review nghiệp vụ. Cột kết quả thực tế, Pass/Fail và bug phát sinh sẽ được cập nhật khi frontend và API trang chủ sẵn sàng chạy kiểm thử.