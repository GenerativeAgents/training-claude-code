#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

if [ "$(whoami)" != "ubuntu" ]; then
  echo "This script must be run as ubuntu user" >&2
  exit 1
fi

# ソースコードのダウンロード
cd /home/ubuntu/environment
if [ ! -d "training-claude-code-starter" ]; then
  git clone https://github.com/GenerativeAgents/training-claude-code-starter.git
fi
cd training-claude-code-starter
