document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = {
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup Successful!");
  window.location.href = "login.html";
});
