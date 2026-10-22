# 設計

- `docs/setup.sh`: Node.js 24.22.1を指定。単独利用時もツール取得前にOS CAを更新する。
- `docs/ec2_code_server.yaml`: UserData先頭でCAを更新し、`ca-certificates >= 20260816ubuntu0.22.04.1`を検査する。CloudFormation `Fn::Sub`内のdpkg書式は`${!Version}`でエスケープする。
- `package.json` / `package-lock.json`: Next.jsとeslint-config-nextを16.4.2へ揃える。React等の既存版は維持し、変更に必要な推移依存のみ同期する。
- npm監査で修正版を確認した`@babel/core`、`@humanfs/node`、`baseline-browser-mapping`、`browserslist`、`brace-expansion`、`js-yaml`、`picomatch`、`source-map-js`は、対象名を指定して既存の互換範囲内で更新する。全依存の更新や、監査提案のESLint設定のメジャーダウングレードは行わない。

根拠（2026-10-22確認）:

- [Node.js October 2026 security releases](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases): 24.22.1にBrotli CVE-2026-111497とeMudhra CA対策を収録。
- [Ubuntu USN-8944-1](https://ubuntu.com/security/notices/USN-8944-1): Ubuntu 22.04の対応版は20260816ubuntu0.22.04.1。
- [Next.js v16.4.1](https://github.com/vercel/next.js/releases/tag/v16.4.1): `use cache`の型付き配列、SVG画像最適化、Server Actionsの追加セキュリティ修正を収録。16.3.8ではこれらが未修正のため、npm registryの最新安定版[16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)を採用する。
- [GHSA-cjq9-62q9-8jv4](https://github.com/vercel/next.js/security/advisories/GHSA-cjq9-62q9-8jv4): 上流の修正版表示は`16.3.?`のため、[16.3.8公式リリース](https://github.com/vercel/next.js/releases/tag/v16.3.8)でも修正収録を確認した。現演習の`next.config.ts`に`images.remotePatterns`はなく、このSSRFの利用条件には該当しない。実害・悪用を確認したという意味ではない。

EC2は起動せず配布定義を検証する。Claude Code・AWS CLI・code-serverの同梱ランタイム/CAの対応は、ホストNode/OS CA更新とは別であり、この変更で対応済みとは扱わない。
