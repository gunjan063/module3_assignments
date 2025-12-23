import { TodoProvider } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
