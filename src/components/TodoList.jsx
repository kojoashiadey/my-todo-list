import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="text-gray-500 italic mt-4">No tasks yet. Add one above 👆</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
