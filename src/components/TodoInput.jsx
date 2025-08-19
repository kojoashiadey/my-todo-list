import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTodo(task);
        setTask("");
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4">
        Add
      </button>
    </form>
  );
}
