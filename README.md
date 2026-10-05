# AIコーディング実践講座の教材

`main` ブランチに全演習をまとめています。章が変わったら、対象のフォルダをVS Codeで開いてください。

| 演習 | フォルダ | 内容 |
| --- | --- | --- |
| Claude Codeの基礎 | [exercises/claude-code-basics](exercises/claude-code-basics/README.md) | 基本操作と外部サービス連携 |
| 仕様駆動開発（SDD） | [exercises/sdd](exercises/sdd/README.md) | Next.jsの雛形から仕様を整理して実装 |

## 演習の開始

1. 対象の演習フォルダをVS Codeで開き、そのフォルダのターミナルを使います。
2. 配布環境の `.env` がリポジトリのルートにある場合は、演習フォルダから次を実行します。既存の `.env` は上書きしません。

   ```bash
   test -e .env || test -L .env || ln -s ../../.env .env
   ```

   自分の環境でAPIキーを使う場合は、演習フォルダに `.env` を作成し、ルートの [.env.example](.env.example) を参考に設定してください。
3. `package.json` のある演習では `npm ci` を実行します。
4. 同じターミナルで `claude` を起動します。開発サーバーの起動などは各演習のREADMEを参照してください。

演習ごとに依存関係とClaude Codeの設定を管理します。設定やスキルの見本は [examples](examples/README.md) にあります。

## 保存と持ち帰り

章の移動に伴うブランチ切り替えは不要です。変更したファイルをcommit・pushすると、全演習の成果物を同じブランチで保存できます。
Giteaを使う配布環境では、リポジトリ画面の「Code → Download ZIP」でpush済みの成果物を取得できます。
GitHubを使う場合は、リポジトリ画面の「Code → Download ZIP」から取得できます。
ZIPには未コミット・未pushの変更とGit履歴は含まれません。`.env` と認証情報はコミットしないでください。

従来の `hands-on/*` ブランチは既存の教材・受講者向けに残しています。
