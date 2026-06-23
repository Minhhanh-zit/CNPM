# CineHunt v0.1.1 - Release Quality Improvements

## Summary

CineHunt v0.1.1 tập trung cải thiện khả năng kiểm chứng và tái lập của bản MVP. Phiên bản này đồng bộ metadata frontend, thay giao diện Vite mặc định bằng luồng CineHunt có thể demo, bổ sung automated tests, GitHub Actions và production artifact.

Đây là bản pre-release phục vụ học tập và demo, chưa được khuyến nghị sử dụng trong môi trường production.

## New Features

- Trang chủ hiển thị danh sách phim.
- Trang chi tiết phim và lựa chọn suất chiếu.
- Luồng chọn ghế với kiểm tra trạng thái ghế.
- Tính tổng tiền theo danh sách ghế đã chọn.
- Thanh toán giả lập và hiển thị thông tin vé.
- Trang Not Found cho route không tồn tại.

## Engineering Improvements

- GitHub Actions chạy `npm ci`, `npm run lint`, `npm test` và `npm run build`.
- Production build artifact được tạo từ đúng commit CI.
- Automated tests cho các quy tắc nghiệp vụ frontend cốt lõi.
- Dependabot theo dõi dependency npm của frontend.
- Release checklist cho versioning, CI, traceability, security và publishing.
- Đồng bộ package name thành `cinehunt-frontend` và version thành `0.1.1`.

## Installation

```bash
git clone --branch v0.1.1 --depth 1 https://github.com/Minhhanh-zit/CNPM.git
cd CNPM/frontend
npm ci
npm run dev
```

## Verification

```bash
cd frontend
npm ci
npm run lint
npm test
npm run build
```

## Testing Evidence

- Pull request: https://github.com/Minhhanh-zit/CNPM/pull/67
- Tracking issue: https://github.com/Minhhanh-zit/CNPM/issues/68
- GitHub Actions workflow: `Frontend CI`
- Successful run: #23, run ID `27817905564`
- Artifact: `cinehunt-frontend-d482035fbff0b9b6cc4fe34817429ed1532b8c1b`

## Known Issues

- Thanh toán hiện được mô phỏng.
- Automated tests hiện tập trung vào nghiệp vụ frontend cốt lõi, chưa phải end-to-end tests.
- Một số chức năng quản trị chưa hoàn thiện.
- API, cấu trúc dữ liệu và cấu hình có thể thay đổi trước `v1.0.0`.

## Contributors

- `@Minhhanh-zit`
- [Bổ sung reviewer hoặc contributor thực tế trước khi publish release]
