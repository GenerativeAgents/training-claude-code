#!/bin/bash

# 以下の形式の標準入力からファイルパスを取得
# {
#   "session_id": "abc123",
#   "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
#   "cwd": "/Users/...",
#   "permission_mode": "default",
#   "hook_event_name": "PostToolUse",
#   "tool_name": "Write",
#   "tool_input": {
#     "file_path": "/path/to/file.txt",
#     "content": "file content"
#   },
#   "tool_response": {
#     "filePath": "/path/to/file.txt",
#     "success": true
#   }
# }
file_path=$(jq -r '.tool_input.file_path')

# HTML、CSS、JS、TSファイルかどうかをチェック
if echo "$file_path" | grep -qE '\.(html|css|js|ts)$'; then
  # Prettierでファイルをフォーマット
  npx prettier --write "$file_path"
fi
