export function disTodo(todo) {
  const box = document.getElementById("todo"); // match your HTML ID
  box.innerHTML = "";

  todo.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.title;
    box.appendChild(p);
  });
}
