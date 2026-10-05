# 研修用の外部サービス

Giteaを使う配布環境では、GitHubへのログインは不要です。Issue操作には設定済みの `tea` を使ってください。

- 接続先は `http://127.0.0.1:3001`、teaのlogin名は `training`、リポジトリは `student/training-claude-code` です。
- Gitのoriginとteaの接続先は、設定済みのローカルURLを維持してください。
- ブラウザ用URLは、code-serverのURLのホスト名の先頭に `3001.` を付けたものです。teaが返すIssue URLの `http://127.0.0.1:3001` 部分を、この公開URLへ置き換えて案内してください。
- 新規環境でのWebログインは `student` / `password` です。CLIのGit・tea認証は設定済みです。
- 認証トークンや個別の認証情報を表示したり、リポジトリへコミットしたりしないでください。
