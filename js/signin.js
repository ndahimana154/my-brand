const form = document.getElementById("loginForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formError.innerHTML = ""; // Clear previous error messages
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  let errorMessage = "";

  if (username == "") {
    errorMessage += "Username can't be empty.<br>";
  }
  if (password == "") {
    errorMessage += "Password can't be empty.<br>";
  }

  if (password.length < 4) {
    errorMessage +=
      "Password must be atleast 4 characters long.<br>";
  }

  if (errorMessage) {
    formError.innerHTML = errorMessage;
  } else {
    // If all validations pass, you can submit the form
    form.submit();
  }
});
