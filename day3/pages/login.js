document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = JSON.parse(localStorage.getItem("user"));

  if (
    user &&
    user.email === document.getElementById("email").value &&
    user.pass === document.getElementById("pass").value
  ) {
    localStorage.setItem("logged", "true");
    window.location.href = "todo.html";
  } else {
    alert("Wrong email or password");
  }
});
