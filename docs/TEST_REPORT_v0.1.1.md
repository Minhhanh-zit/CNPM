# Test Report - CineHunt v0.1.1

## Scope

Báo cáo này ghi nhận bằng chứng kiểm tra cho frontend CineHunt trên branch `release/v0.1.1` trước khi tạo tag phát hành.

## Environment

- CI platform: GitHub Actions
- Workflow: `Frontend CI`
- Node.js: 22
- Package manager: npm
- Successful run: #23
- Run ID: `27817905564`
- Verified commit: `d482035fbff0b9b6cc4fe34817429ed1532b8c1b`

## Automated Quality Gates

| Check | Command | Result |
|---|---|---|
| Dependency installation | `npm ci` | Passed |
| Static analysis | `npm run lint` | Passed |
| Automated tests | `npm test` | Passed |
| Production build | `npm run build` | Passed |
| Artifact upload | `actions/upload-artifact` | Passed |

## Artifact

- Name: `cinehunt-frontend-d482035fbff0b9b6cc4fe34817429ed1532b8c1b`
- Source: production build created by GitHub Actions from the verified commit.

## Covered Behaviors

Automated tests tập trung vào các quy tắc nghiệp vụ frontend cốt lõi, bao gồm trạng thái ghế, lựa chọn ghế, tính tổng tiền và các hành vi được định nghĩa trong test suite của repository.

## Limitations

- Chưa có end-to-end tests chạy trên trình duyệt thật.
- Chưa có load test cho tình huống nhiều người dùng cùng giữ ghế.
- Thanh toán vẫn là mock.
- Báo cáo này cần được cập nhật bằng run trên `main` và đúng tag `v0.1.1` sau khi PR được merge.

## Traceability

- Pull request: https://github.com/Minhhanh-zit/CNPM/pull/67
- Testing issue: https://github.com/Minhhanh-zit/CNPM/issues/68
- Release notes: `docs/RELEASE_NOTES_v0.1.1.md`
