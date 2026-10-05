# Next.js 実装ガイドライン

## 実装方針
コードの実装はTaskツールを使用して `implementer` エージェントに委譲すること。

## 技術スタック
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## 実装パターン

### localStorage によるデータ永続化
localStorageはコンポーネントのトップレベルで直接アクセスできます。
useEffectでラップする必要はありません。

```typescript
// 推奨パターン
const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
```

### 動的ルートのパラメータ取得
App Routerの動的ルートでは、paramsは同期的にアクセスします。

```typescript
// 推奨パターン
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // ...
}
```

### タスクデータの型定義
日時はDateオブジェクトとして保持します。

```typescript
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Server ComponentとClient Componentの連携
page.tsx（Server Component）からClient Componentへは、関数を含む任意のpropsを渡せます。

```typescript
// page.tsx
export default function Page() {
  const handleDelete = (id: string) => { /* ... */ };
  return <TaskList onDelete={handleDelete} />;
}
```
