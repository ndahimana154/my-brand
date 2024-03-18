document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate username
    if (username.length == "") {
      usernameError.textContent = "Username can't be empty";
    } else if (username.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters long";
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      usernameError.textContent =
        "Username can only contain letters and numbers";
    } else if (/^\d+$/.test(username)) {
      usernameError.textContent = "Username cannot contain numbers only";
    }

    // Validate password
    if (password.length == "") {
      passwordError.textContent = "Password can't be empty";
    } else if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(
        password
      )
    ) {
      passwordError.textContent =
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    // If there are no errors, submit the form
    if (!usernameError.textContent && !passwordError.textContent) {
      // Form is valid, proceed with login or other actions
      if (!usernameError.textContent && !passwordError.textContent) {
        usernameError.textContent = "";
        passwordError.textContent = "";

        // Create object to store form values
        var LogggedUser = {
          username: username,
          password: password,
        };

        // Convert them into JSON string
        var LogggedUserJSON = JSON.stringify(LogggedUser);

        // Store in local Storage
        localStorage.setItem("LogginFormData", LogggedUserJSON);

        // Retrieve data
        var StoredLoggedData = localStorage.getItem("LogginFormData");

        if (StoredLoggedData) {
          var formData = JSON.parse(StoredLoggedData);

          // Accessing
          var storedUsername = formData.username;
          var storedPassword = formData.password;

          console.log("Username: ", storedUsername);
          console.log("Password: ", storedPassword);
        } else {
          console.log("No data stored on Local Storage");
        }
      }

      alert("Form submitted successfully!");
    }
  });
