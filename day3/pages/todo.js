import { disTodo } from "./distodo.js"; // import file


if (localStorage.getItem("logged") !== "true") {
  alert("Please login first");
  window.location.href = "login.html";
}


fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => disTodo(data));

