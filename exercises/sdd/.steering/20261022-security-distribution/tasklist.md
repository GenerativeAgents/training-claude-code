# タスク

- [x] 指示・対象・一次資料・互換条件を確認
- [x] 新規構築用Node.jsとOS CA更新処理を修正
- [x] Next.js / eslint-config-nextのlockを同期し、修正版のある監査対象依存を限定更新
- [x] シェル構文、CloudFormation UserDataのシェル構文、CA最低版の境界値を検証
- [x] npm auditを比較（全依存17件→5件、本番依存0件）
- [x] クリーンインストール、lint、型、build、lock不変、YAML構文を検証
- [x] 差分と依存更新範囲を確認

## 検証結果

- Node.js 24.22.1（Linux arm64）、npm 11.19.1で`npm ci`成功。
- `npm ls next eslint-config-next react react-dom`でNext.js / ESLint設定16.4.2とReact / React DOM 19.2.3の整合性を確認。
- `npm run lint`、`npm exec -- tsc --noEmit`、`npm run build`成功。`/`と`/_not-found`の静的生成完了。
- `NODE_OPTIONS=--max-old-space-size=1536`、`CIRCLE_NODE_TOTAL=2`（静的生成1ワーカー）、`RAYON_NUM_THREADS=2`でビルド。共通のfrontendロックで他担当のビルドと直列化。
- `npm ci`前後およびビルド後のlockのSHA-256一致。React、TypeScript、ESLint本体、Tailwind CSSの既存版を維持。
- `bash -n docs/setup.sh`成功。CloudFormation YAML解析、`Fn::Sub`の`${!Version}`エスケープ、展開後UserDataの`bash -n`も成功。
- CA検査は旧版を拒否し、対応版と後続版を受理することをモックで確認。新規構築スクリプト自体は実行していない。
- `git diff --check`成功。既存のtestスクリプトはない。

EC2起動、CloudFormationの実デプロイ、既存環境や外部API資格情報を使う接続確認は実施していない。commit/pushとPR作成結果はGitHubの履歴を参照する。

## 監査の残件

`braces <= 3.0.3`の[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)に由来するHighが5件残る。
ESLintの`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`の開発依存経路であり、本番依存の監査は0件。
`npm audit`の修正提案は`eslint-config-next@14.2.35`へのメジャーダウングレードとなるため採用しない。
実害・悪用条件を確認したという意味ではなく、監査データに基づく依存上の残件として扱う。
