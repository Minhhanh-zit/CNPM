# CineHunt v0.1.1 - Release Quality Improvements

## Summary

CineHunt v0.1.1 tập trung cải thiện khả năng kiểm chứng và tái lập của bản MVP. Phiên bản này đồng bộ metadata phiên bản frontend, bổ sung GitHub Actions để kiểm tra lint/build và tạo production artifact, đồng thời bổ sung checklist phát hành chuyên nghiệp.

Đây là bản pre-release phục vụ học tập và demo, chưa được khuyến nghị sử dụng trong môi trường production.

## Added

- GitHub Actions workflow chạy `npm ci`, `npm run lint` và `npm run build`.
- Production build artifact được tạo từ GitHub Actions.
- Dependabot theo dõi dependency npm của frontend.
- Checklist kiểm tra versioning, CI, traceability, security và publishing.

## Changed

- Đổi tên package frontend thành `cinehunt-frontend`.
- Đồng bộ phiên bản frontend thành `0.1.1`.

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
npm run build
```

Bằng chứng CI và artifact phải được liên kết sau khi workflow của pull request hoàn thành.

## Known Issues

- Thanh toán hiện được mô phỏng.
- Automated tests chưa được bổ sung trong thay đổi này.
- Một số chức năng quản trị chưa hoàn thiện.
- API, cấu trúc dữ liệu và cấu hình có thể thay đổi trước `v1.0.0`.

## Contributors

- `@Minhhanh-zit`
- [Bổ sung thành viên review hoặc đóng góp thực tế trước khi publish release]
