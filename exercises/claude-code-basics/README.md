# Claude Codeの基礎

## 研修用Giteaへのログイン

GiteaのURLは、code-serverのURLのホスト名の先頭に `3001.` を付けたものです。
ブラウザのアドレス欄で、次の例のように書き換えて開いてください。
`?folder=...` などのクエリ文字列は不要です。

```text
code-server: https://20261005-01.academy.generative-agents.co.jp/?folder=...
Gitea:       https://3001.20261005-01.academy.generative-agents.co.jp/
```

ユーザー名は `student`、初期パスワードはcode-serverへのログインに使ったパスワードと同じです。
パスワードを確認するには、code-serverの「Terminal」→「New Terminal」でターミナルを開き、次のコマンドを実行してください。

```bash
cat ~/.config/training-gitea/password
```

表示されたパスワードをコピーして、Giteaのログイン画面に入力します。
ログイン後は `student/training-claude-code` リポジトリを開いてください。
