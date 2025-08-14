import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4">
        Add
      </button>
    </form>
  );
}
