"use client";

import { useState } from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: newTaskTitle.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="新しいタスクを入力..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 cursor-pointer"
            />
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition-colors"
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          タスクがありません。追加してみましょう!
        </p>
      )}
    </div>
  );
}
