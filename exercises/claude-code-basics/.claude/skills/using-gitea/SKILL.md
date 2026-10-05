---
name: using-gitea
description: 研修用GiteaのIssueを一覧取得・作成・更新するとき、またはログイン方法を案内するときに使う。設定済みのteaで操作する。
---

# 研修用Giteaの操作

研修環境ではGitHubへのログインは不要。Issue操作には設定済みの `tea` を使う。

- 接続先: `http://127.0.0.1:3001`
- teaのlogin名: `training`
- リポジトリ: `student/training-claude-code`

演習フォルダからIssueを操作する。

```bash
tea issues list --fields index,title,url --output json
tea issues create --title 'タイトル' --description '本文'
```

更新などの詳しいオプションは `tea issues --help` と該当サブコマンドの `--help` で確認する。Gitのoriginとteaの接続先は、設定済みのローカルURLを維持する。Git操作は演習の `CLAUDE.md` とユーザーの指示に従う。

新規環境でのWebログインはユーザー名 `student`、初期パスワードはcode-serverと同じ。
URLとパスワードの確認方法は `exercises/claude-code-basics/README.md` を参照する。
CLIのGitとteaの認証は設定済み。
認証トークンを表示せず、パスワードやトークンをリポジトリへコミットしない。
