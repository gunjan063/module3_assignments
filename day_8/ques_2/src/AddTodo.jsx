import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export default function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => { addTodo(text); setText(""); }}>
        Add
      </button>
    </>
  );
}
