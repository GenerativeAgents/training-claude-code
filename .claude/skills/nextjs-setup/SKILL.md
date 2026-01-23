---
name: nextjs-setup
description: Next.jsプロジェクトの設定ガイド。assetPrefixなど必要な設定を説明する。
---

Next.jsを使用する場合、以下の設定が必要です。

## next.config.ts の設定

プロキシ経由でアセットを配信するため、`assetPrefix`の設定を行ってください：

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/proxy/3000",
};

export default nextConfig;
```

## 設定の説明

- **assetPrefix**: `/proxy/3000` を設定することで、静的アセット（JS、CSS、画像など）のURLにこのプレフィックスが付与される
- この設定はプロキシサーバー経由でアプリケーションを公開する場合に必要
