import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: uuidv4(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">✅ To-Do List</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 border p-2 rounded"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}

    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">✅ To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
