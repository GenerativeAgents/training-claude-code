# 仕様駆動開発（SDD）

## pushしたソースコードの確認

code-serverのエディターでこのREADMEを開き、Ctrlキーを押しながら次のURLをクリックすると、Giteaでこの演習のソースコードを確認できます。

<http://localhost:3001/student/training-claude-code/src/branch/main/exercises/sdd>

このURLは `main` ブランチを表示します。別のブランチにpushした場合は、Giteaの画面でそのブランチを選んでください。
ログイン方法は [Claude Codeの基礎のREADME](../claude-code-basics/README.md#研修用giteaへのログイン) を参照してください。

## プロジェクトについて

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## はじめかた

まず、開発サーバーを起動します：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで以下にアクセス：

- http://localhost:3000

`src/app/page.tsx` を編集すると自動で反映されます。

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
