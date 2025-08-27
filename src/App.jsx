import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Toggle completion
  const toggleTask = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(t.id)}>{t.text}</span>
            <button className="delete" onClick={() => deleteTask(t.id)}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
