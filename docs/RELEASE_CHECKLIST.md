# Release Checklist

Checklist này được dùng trước khi phát hành một phiên bản CineHunt.

## Versioning

- [x] Phiên bản trong `frontend/package.json` là `0.1.1`.
- [x] `CHANGELOG.md` có mục cho phiên bản `0.1.1`.
- [x] Release notes nêu rõ phạm vi, giới hạn và known issues.

## Quality gates

- [x] `npm ci` chạy thành công trên CI run #23.
- [x] `npm run lint` chạy thành công trên CI run #23.
- [x] `npm test` chạy thành công trên CI run #23.
- [x] `npm run build` chạy thành công trên CI run #23.
- [x] Production artifact được tạo từ commit đã được CI kiểm tra.
- [ ] Chạy lại toàn bộ quality gates trên head commit mới nhất trước khi merge.

## Traceability

- [x] Release notes liên kết Pull Request #67 và Issue #68.
- [x] Có test report tại `docs/TEST_REPORT_v0.1.1.md`.
- [ ] Pull request có ít nhất một review độc lập.

## Security and repository hygiene

- [x] Có `SECURITY.md` hướng dẫn báo cáo lỗ hổng.
- [x] Có Dependabot theo dõi dependency frontend.
- [ ] Xác nhận thủ công không có secret, token hoặc password trong source code.
- [ ] Xác nhận không có lỗ hổng high hoặc critical chưa xử lý.

## Publishing

- [ ] Merge PR sau khi CI trên head commit mới nhất pass.
- [ ] Chạy CI trên `main` sau merge.
- [ ] Tạo annotated tag `v0.1.1` từ commit đã kiểm tra.
- [ ] Tạo GitHub Release và đánh dấu pre-release.
- [ ] Đính kèm artifact hoặc liên kết workflow run của tag.
- [ ] Ghi nhận reviewer và contributors thực tế.
