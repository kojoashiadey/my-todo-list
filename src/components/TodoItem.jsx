export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? "line-through text-gray-500" : ""}
        style={{ cursor: "pointer" }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500"
      >
        ❌
      </button>
    </li>
  );
}
