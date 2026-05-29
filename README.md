# CNPM
# [Analysis] Xác định phạm vi hệ thống đặt vé xem phim

## Mục tiêu

Issue này nhằm xác định phạm vi chính của hệ thống đặt vé xem phim, bao gồm mục tiêu hệ thống, đối tượng sử dụng, chức năng chính, chức năng không nằm trong phạm vi đồ án và mô tả phạm vi tổng thể.

Việc xác định phạm vi giúp nhóm phát triển hiểu rõ hệ thống cần làm gì, không làm gì, tránh mở rộng chức năng quá mức và làm cơ sở cho các bước tiếp theo như viết user stories, xác định use case, thiết kế cơ sở dữ liệu, thiết kế giao diện và xây dựng API.

---

## 1. Mô tả tổng quan

Hệ thống đặt vé xem phim là một nền tảng hỗ trợ người dùng xem thông tin phim, xem lịch chiếu, chọn ghế, đặt vé và thanh toán trực tuyến.

Ngoài chức năng đặt vé thông thường, hệ thống có thêm chức năng săn vé cho các suất chiếu hot hoặc sự kiện mở bán vé đặc biệt. Khi nhiều người dùng cùng chọn ghế trong một thời điểm, hệ thống cần đảm bảo không xảy ra tình trạng đặt trùng ghế.

Hệ thống được xây dựng phục vụ mục đích học tập và demo đồ án môn Công nghệ phần mềm.

---

## 2. Mục tiêu hệ thống

Hệ thống đặt vé xem phim được xây dựng với các mục tiêu chính sau:

- Cho phép người dùng xem danh sách phim đang chiếu và sắp chiếu.
- Cho phép người dùng xem thông tin chi tiết của từng bộ phim.
- Cho phép người dùng xem lịch chiếu theo phim, rạp, ngày và giờ chiếu.
- Cho phép người dùng chọn suất chiếu và chọn ghế.
- Cho phép người dùng đặt vé xem phim trực tuyến.
- Cho phép người dùng thanh toán giả lập để hoàn tất đặt vé.
- Cho phép người dùng xem vé đã đặt.
- Hỗ trợ chức năng săn vé với cơ chế giữ ghế tạm thời.
- Hạn chế tình trạng nhiều người dùng đặt trùng một ghế.
- Cho phép quản trị viên quản lý phim, rạp, phòng chiếu, ghế, suất chiếu và đơn đặt vé.
- Cung cấp dữ liệu và chức năng đủ để demo quy trình đặt vé hoàn chỉnh.

---

## 3. Đối tượng sử dụng

Hệ thống có các nhóm người dùng chính sau:

### 3.1. Guest

Guest là khách truy cập chưa đăng nhập vào hệ thống.

Guest có thể:

- Xem danh sách phim.
- Xem chi tiết phim.
- Xem lịch chiếu.
- Tìm kiếm phim.
- Đăng ký tài khoản.
- Đăng nhập hệ thống.

Guest không thể:

- Chọn ghế.
- Đặt vé.
- Thanh toán.
- Xem vé đã đặt.

---

### 3.2. User

User là người dùng đã đăng ký tài khoản và đăng nhập vào hệ thống.

User có thể:

- Xem danh sách phim.
- Xem chi tiết phim.
- Xem lịch chiếu.
- Chọn suất chiếu.
- Xem sơ đồ ghế.
- Chọn ghế.
- Giữ ghế tạm thời.
- Tạo đơn đặt vé.
- Thanh toán vé.
- Xem vé đã đặt.
- Xem lịch sử đặt vé.
- Tham gia săn vé khi có suất chiếu mở bán.

---

### 3.3. Admin

Admin là người quản trị hệ thống.

Admin có thể:

- Đăng nhập vào trang quản trị.
- Quản lý phim.
- Quản lý rạp chiếu.
- Quản lý phòng chiếu.
- Quản lý ghế.
- Quản lý suất chiếu.
- Quản lý đơn đặt vé.
- Theo dõi trạng thái thanh toán.
- Theo dõi trạng thái ghế trong từng suất chiếu.

---

### 3.4. Payment Gateway

Payment Gateway là cổng thanh toán hoặc hệ thống thanh toán giả lập.

Payment Gateway có vai trò:

- Nhận yêu cầu thanh toán từ hệ thống.
- Xử lý giao dịch thanh toán.
- Trả kết quả thanh toán thành công hoặc thất bại.
- Gửi phản hồi trạng thái thanh toán về hệ thống.

Trong phạm vi đồ án, Payment Gateway có thể được mô phỏng thay vì tích hợp thanh toán thật.

---

## 4. Phạm vi chức năng chính

### 4.1. Chức năng tài khoản

Hệ thống hỗ trợ các chức năng liên quan đến tài khoản người dùng:

- Đăng ký tài khoản.
- Đăng nhập.
- Đăng xuất.
- Phân quyền User và Admin.
- Kiểm tra quyền truy cập vào các chức năng phù hợp.

---

### 4.2. Chức năng xem phim

Hệ thống cho phép Guest và User xem thông tin phim.

Các chức năng bao gồm:

- Xem danh sách phim đang chiếu.
- Xem danh sách phim sắp chiếu.
- Xem chi tiết phim.
- Tìm kiếm phim theo tên.
- Xem thông tin phim như tên phim, poster, mô tả, thể loại, thời lượng và trạng thái chiếu.

---

### 4.3. Chức năng xem lịch chiếu

Hệ thống cho phép người dùng xem lịch chiếu của phim.

Các chức năng bao gồm:

- Xem lịch chiếu theo phim.
- Xem lịch chiếu theo ngày.
- Xem lịch chiếu theo rạp.
- Xem giờ chiếu.
- Chọn suất chiếu để bắt đầu đặt vé.

---

### 4.4. Chức năng chọn ghế

Hệ thống cho phép User chọn ghế cho suất chiếu đã chọn.

Các chức năng bao gồm:

- Hiển thị sơ đồ ghế của phòng chiếu.
- Hiển thị trạng thái ghế.
- Cho phép chọn một hoặc nhiều ghế còn trống.
- Không cho chọn ghế đã bán.
- Không cho chọn ghế đang được người khác giữ.
- Tính tổng tiền dựa trên số lượng ghế được chọn.

Các trạng thái ghế cần có:

- `AVAILABLE`: Ghế còn trống.
- `HELD`: Ghế đang được giữ tạm thời.
- `SOLD`: Ghế đã bán.
- `BLOCKED`: Ghế bị khóa hoặc không sử dụng.

---

### 4.5. Chức năng đặt vé

Hệ thống cho phép User tạo đơn đặt vé sau khi chọn ghế.

Các chức năng bao gồm:

- Tạo đơn đặt vé.
- Lưu thông tin phim, suất chiếu, ghế và tổng tiền.
- Sinh mã đơn đặt vé.
- Cập nhật trạng thái đơn đặt vé.
- Kiểm tra thời gian hết hạn của đơn đặt vé.
- Tạo vé sau khi thanh toán thành công.

Các trạng thái đơn đặt vé có thể gồm:

- `PENDING_PAYMENT`: Chờ thanh toán.
- `PAID`: Đã thanh toán.
- `FAILED`: Thanh toán thất bại.
- `EXPIRED`: Đơn đã hết hạn.
- `CANCELLED`: Đơn đã bị hủy.

---

### 4.6. Chức năng thanh toán

Trong phạm vi đồ án, hệ thống sử dụng thanh toán giả lập.

Các chức năng bao gồm:

- Hiển thị thông tin đơn thanh toán.
- Gửi yêu cầu thanh toán.
- Nhận kết quả thanh toán thành công.
- Nhận kết quả thanh toán thất bại.
- Cập nhật trạng thái đơn vé sau thanh toán.
- Chuyển ghế sang trạng thái `SOLD` nếu thanh toán thành công.
- Không tạo vé nếu thanh toán thất bại hoặc đơn đã hết hạn.

---

### 4.7. Chức năng săn vé

Chức năng săn vé là điểm nhấn của hệ thống.

Chức năng này mô phỏng tình huống nhiều người dùng cùng truy cập một suất chiếu hot và cùng chọn ghế trong thời gian mở bán.

Các chức năng bao gồm:

- Cho phép nhiều người dùng truy cập cùng một suất chiếu.
- Cập nhật trạng thái ghế khi người dùng chọn ghế.
- Giữ ghế tạm thời cho người chọn thành công.
- Không cho người khác chọn ghế đang được giữ.
- Hiển thị thời gian countdown giữ ghế.
- Tự động mở lại ghế nếu người dùng không thanh toán đúng hạn.
- Chống đặt trùng ghế trong cùng một suất chiếu.
- Kiểm tra trạng thái ghế trước khi tạo đơn đặt vé.
- Kiểm tra trạng thái đơn trước khi xác nhận thanh toán.

---

### 4.8. Chức năng quản trị phim

Admin có thể quản lý dữ liệu phim trong hệ thống.

Các chức năng bao gồm:

- Xem danh sách phim.
- Thêm phim mới.
- Sửa thông tin phim.
- Xóa hoặc ẩn phim.
- Cập nhật trạng thái phim đang chiếu hoặc sắp chiếu.
- Quản lý poster, mô tả, thể loại, thời lượng và ngày khởi chiếu.

---

### 4.9. Chức năng quản trị suất chiếu

Admin có thể quản lý lịch chiếu phim.

Các chức năng bao gồm:

- Xem danh sách suất chiếu.
- Thêm suất chiếu mới.
- Sửa thông tin suất chiếu.
- Xóa hoặc hủy suất chiếu.
- Chọn phim cho suất chiếu.
- Chọn rạp, phòng chiếu, ngày chiếu và giờ chiếu.
- Thiết lập giá vé.
- Kiểm tra trùng lịch chiếu trong cùng phòng.

---

### 4.10. Chức năng quản trị đơn đặt vé

Admin có thể theo dõi đơn đặt vé trong hệ thống.

Các chức năng bao gồm:

- Xem danh sách đơn đặt vé.
- Xem chi tiết đơn đặt vé.
- Xem trạng thái thanh toán.
- Xem trạng thái ghế.
- Theo dõi các đơn đã thanh toán, thất bại hoặc hết hạn.

---

## 5. Chức năng không nằm trong phạm vi đồ án

Để đảm bảo phù hợp với thời gian và quy mô đồ án, hệ thống không triển khai các chức năng sau:

- Tích hợp thanh toán thật với ngân hàng hoặc ví điện tử.
- Hoàn tiền tự động.
- Xuất hóa đơn điện tử.
- Gửi email thật.
- Gửi SMS thật.
- Tích hợp bản đồ chỉ đường đến rạp.
- Tích điểm thành viên phức tạp.
- Gợi ý phim bằng AI.
- Đánh giá phim và bình luận phim.
- Livestream hoặc xem phim trực tuyến.
- Ứng dụng mobile riêng.
- Chat hỗ trợ khách hàng.
- Quản lý nhân viên rạp chi tiết.
- Quản lý doanh thu chuyên sâu.
- Quản lý nhiều chi nhánh ở quy mô doanh nghiệp lớn.
- Tích hợp hệ thống kiểm soát vé tại rạp bằng QR thật.
- Xử lý tải lớn như các hệ thống thương mại điện tử thực tế.

---

## 6. Giới hạn hệ thống

Hệ thống có một số giới hạn sau:

- Dữ liệu phim, rạp, phòng chiếu và suất chiếu chủ yếu là dữ liệu mẫu.
- Thanh toán chỉ là mô phỏng.
- Chức năng săn vé tập trung vào giữ ghế, countdown và chống đặt trùng.
- Hệ thống chưa tối ưu cho số lượng người dùng cực lớn.
- Một số chức năng nâng cao chỉ được mô tả trong phần hướng phát triển.
- Hệ thống được xây dựng để phục vụ mục đích học tập, demo và báo cáo đồ án.

---

## 7. Kết quả đầu ra mong muốn

Sau khi hoàn thành issue này, nhóm cần có:

- Tài liệu mô tả phạm vi hệ thống.
- Mục tiêu hệ thống rõ ràng.
- Danh sách đối tượng sử dụng.
- Danh sách chức năng chính.
- Danh sách chức năng không nằm trong phạm vi đồ án.
- Mô tả rõ phạm vi chức năng săn vé.
- Cơ sở để viết user stories, use case và thiết kế hệ thống.

---

