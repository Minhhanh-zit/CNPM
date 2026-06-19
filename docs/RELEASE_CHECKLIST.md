# Release Checklist

Checklist này được dùng trước khi phát hành một phiên bản CineHunt.

## Versioning

- [ ] Phiên bản trong `frontend/package.json` khớp với Git tag.
- [ ] `CHANGELOG.md` có mục cho phiên bản mới.
- [ ] Release notes nêu rõ phạm vi, giới hạn và known issues.

## Quality gates

- [ ] `npm ci` chạy thành công.
- [ ] `npm run lint` chạy thành công.
- [ ] `npm run build` chạy thành công.
- [ ] GitHub Actions hoàn thành với trạng thái xanh.
- [ ] Production artifact được tạo từ đúng commit phát hành.

## Traceability

- [ ] Các thay đổi liên kết tới issue và pull request liên quan.
- [ ] Pull request có ít nhất một review độc lập.
- [ ] Commit phát hành có thể truy vết tới yêu cầu và bằng chứng kiểm thử.

## Security and repository hygiene

- [ ] Không có secret, token hoặc password trong source code.
- [ ] Dependency audit không có lỗ hổng mức high hoặc critical chưa xử lý.
- [ ] Repository không chứa build output hoặc file rác không cần thiết.

## Publishing

- [ ] Merge PR sau khi CI pass.
- [ ] Tạo annotated tag từ commit đã kiểm tra.
- [ ] Đánh dấu pre-release nếu sản phẩm chưa sẵn sàng production.
- [ ] Đính kèm artifact hoặc deployment link nếu phù hợp.
- [ ] Ghi rõ contributors và known issues.
