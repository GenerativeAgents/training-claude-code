# Claude Codeの設定の見本

| ファイル | 用途 |
| --- | --- |
| [CLAUDE.sample.md](CLAUDE.sample.md) | プロジェクトの開発方針と進め方の見本 |
| [.claude/settings.json](.claude/settings.json) | 編集後にフォーマットするhookの設定例 |
| [.claude/hooks/format.sh](.claude/hooks/format.sh) | Prettierを実行するスクリプト |
| [.claude/skills/explaining-code/SKILL.md](.claude/skills/explaining-code/SKILL.md) | コード説明のskillの例 |
| [.mcp.json](.mcp.json) | Playwright MCPの設定例 |

演習で使うときに必要なファイルを作業フォルダへコピーし、内容を確認して設定します。
見本をリポジトリのルートへ置かず、各演習へ一括で適用されないようにしています。
format hookを使う場合は、作業フォルダに `.claude/settings.json` と `.claude/hooks/format.sh` を配置し、Prettierとjqが使えることを確認してください。
