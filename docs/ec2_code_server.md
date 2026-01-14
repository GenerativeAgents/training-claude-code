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
