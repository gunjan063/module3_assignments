import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              <strong>{todo.title}</strong>
            </Link>
            {" - "}
            {todo.completed ? "Completed ✅" : "Pending ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
