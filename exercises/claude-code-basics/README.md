# Claude Codeの基礎

## 研修用Giteaへのログイン

code-serverのエディターでこのREADMEを開き、Ctrlキーを押しながら次のURLをクリックすると、Giteaが開きます。

http://localhost:3001

ユーザー名は `student`、初期パスワードはcode-serverへのログインに使ったパスワードと同じです。
パスワードを確認するには、code-serverの「Terminal」→「New Terminal」でターミナルを開き、次のコマンドを実行してください。

```bash
cat ~/.config/training-gitea/password
```

表示されたパスワードをコピーして、Giteaのログイン画面に入力します。
ログイン後は `student/training-claude-code` リポジトリを開いてください。
