import { TaskList } from "@/components/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          タスク管理アプリ
        </h1>
        <TaskList />
      </div>
    </div>
  );
}
