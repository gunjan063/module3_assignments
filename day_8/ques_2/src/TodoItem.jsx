import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
