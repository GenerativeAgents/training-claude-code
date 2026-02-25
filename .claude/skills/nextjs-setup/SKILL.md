---
name: nextjs-setup
description: "Next.js を code-server 上で動かす際の設定ガイド（basePath / absproxy 設定）。Next.js + code-server / proxy の組み合わせが登場したら必ずこのスキルを参照すること。特に以下の状況で使用する：(1) code-server や /proxy/3000 経由で Next.js アプリを開く・開こうとしている、(2) ページ内リンクが意図しないURL（/proxy が付かないなど）に遷移する、(3) JS・CSS などの静的アセットが 404 で読み込めない（/_next/static/ が失敗する）、(4) 「リンクが壊れる」「cssが読み込まれない」「proxy経由で動かない」などプロキシ越しの動作不良を報告している。"
---

Next.jsを使用する場合、以下の設定が必要です。

## next.config.ts の設定

code-server 経由でアクセスする場合、`basePath` を設定してください：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/absproxy/3000",
};

export default nextConfig;
```

## 設定の説明

### なぜ `/proxy` ではなく `/absproxy` を使うか

- **`/proxy/<port>`** はリクエストをNext.jsに転送する際に `/proxy/<port>` をパスから**剥がして**渡す
  → Next.js は自分が `/` 直下で動いていると認識し、リンクやアセットのURLが壊れる
- **`/absproxy/<port>`** はパスを**そのまま**転送する
  → Next.js の `basePath` と整合し、ルーティングが正しく機能する

### `basePath` の効果

- `next/link`・`next/router` が自動で `basePath` を付与する
  例: `<Link href="/about">` → `/absproxy/3000/about` に遷移
- 静的アセット（JS、CSS）も正しいパスで配信される
- `assetPrefix` は**不要**（サブパス配下のホスティングには推奨されない）

### アクセスURL

ブラウザからは `/proxy/3000` の代わりに以下のURLを使用する：

```
https://<host>/absproxy/3000/
```

### 注意事項

`basePath` は `next/link` や `next/router` を使った箇所には自動で適用されるが、以下の**絶対パスを直書きしている箇所**は自動で直らないため手動で修正が必要：

- 素の `<a href="/about">` → `<Link href="/about">` に変更する
- `window.location.href = "/about"` → `window.location.href = process.env.NEXT_PUBLIC_BASE_PATH + "/about"` のように対応
- `<img src="/logo.png">` → `next/image` を使うか `basePath` を手動付与
- `fetch("/api/xxx")` → 相対パス `fetch("./api/xxx")` を使うか `basePath` を付与

また、`basePath` はビルド時に埋め込まれるため、変更後は**開発サーバーの再起動**が必要。
