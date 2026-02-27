# セットアップ手順

## 環境の作成

```console
curl -sSfLO https://raw.githubusercontent.com/GenerativeAgents/training-claude-code/refs/heads/main/docs/ec2_code_server.yaml

for i in {01..05}; do
  aws cloudformation create-stack \
    --stack-name "code-server-${i}" \
    --template-body "file://$(pwd)/ec2_code_server.yaml" \
    --capabilities CAPABILITY_IAM \
    --parameters "ParameterKey=AvailabilityZone,ParameterValue=ap-northeast-1a"
done
```

## 接続情報の一覧を取得

```console
stack_names="$(aws cloudformation list-stacks \
  --query 'StackSummaries[?starts_with(StackName, `code-server-`) && StackStatus != `DELETE_COMPLETE`].StackName' \
  --output text \
  | tr '\t' '\n' \
  | sort
)"

for stack_name in $stack_names; do
  echo "${stack_name}"
done

for stack_name in $stack_names; do
  url="$(aws cloudformation describe-stacks \
    --stack-name $stack_name \
    --query 'Stacks[].Outputs[?OutputKey==`URL`].OutputValue' \
    | jq -r .[][]
  )"
  echo "${url}"
done

for stack_name in $stack_names; do
  password="$(aws secretsmanager get-secret-value \
    --secret-id "${stack_name}-Password" \
    --region ap-northeast-1 \
    --query 'SecretString' \
    --output text
  )"
  echo "${password}"
done
```

## EC2インスタンスの強制再起動

Claude CodeがCPUを使いすぎることで、ハンズオン環境にアクセスできなくなるケースがあります。
その場合、EC2インスタンスを強制的に停止して再起動してください。

1. インスタンスの停止
   - EC2インスタンスの一覧画面でインスタンスを選択して、「インスタンスの状態」>「インスタンスの停止」
   - **インスタンスの停止のポップアップでは「OS のシャットダウンをスキップ」を選択**
2. インスタンスの開始
   - EC2インスタンスの一覧画面でインスタンスを選択して、「インスタンスの状態」>「インスタンスの開始」
3. CloudFrontのオリジンを更新
   - <https://github.com/GenerativeAgents/training-llm-application-development-starter/blob/main/docs/ec2_code_server.md#ec2-%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E5%86%8D%E8%B5%B7%E5%8B%95%E6%99%82%E3%81%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85>
