import { useEffect, useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div className="todos-grid">
      {todos.map(todo => (
        <div className="todo-card" key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
