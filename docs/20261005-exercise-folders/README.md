# 演習をフォルダへ移す

独立した演習を `main` の `exercises/` にまとめ、章の移動をフォルダの移動に変更する。

| 元のブランチ | 取り込み元コミット | 移動先 |
| --- | --- | --- |
| hands-on/claude-code-basics | ce255aaa72b724480e77b55c17d430a8673229d6 | exercises/claude-code-basics/ |
| hands-on/dev-rule | 6a707d7387ee212879de583ea31b5d7805a6486d | exercises/dev-rule/ |
| hands-on/sdd | 10c2aae5c7b45cc5e9a67e4958aef5c9514a191e | exercises/sdd/ |
| hands-on/vibe-coding | 5ea0448b1e1b46c311934be94c0fe1fcc49a0e77 | exercises/vibe-coding/ |

各演習の依存関係・設定・ソースを維持し、READMEをフォルダ構成の開始手順へ更新した。
従来mainに置かれていた `.claude/`、`.mcp.json`、`CLAUDE.sample.md` は設定の見本として `examples/claude-code/` へ移した。
ルートの `CLAUDE.md` に演習固有の指示をまとめない。

運営側では次の更新が必要になる。

- 初期clone後に `hands-on/claude-code-basics` へ切り替える処理を外し、mainを使う。
- 初期の作業フォルダを `exercises/claude-code-basics` にする。
- 各演習でClaude Codeを起動できるよう、配布済みのルート `.env` を各演習の `.env` から参照させる。既存ファイルは上書きしない。
- スライドの `git switch hands-on/...` を対象フォルダの案内に変え、設定の見本へのリンクも更新する。

既存の `hands-on/*` ブランチや受講者の作業は書き換えない。新規の研修環境から適用する。
