import React from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        ❌
      </button>
    </li>
  );
}
