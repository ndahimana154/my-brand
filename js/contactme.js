function validateContactForm(event) {
  // Prevent form submission
  event.preventDefault();

  // Get form fields
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  // Get error elements
  var firstnameError = document.getElementById("firstnameError");
  var lastnameError = document.getElementById("lastnameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  // Reset previous error messages
  firstnameError.textContent = "";
  lastnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Check for empty fields
  if (!firstname.value.trim()) {
    firstnameError.textContent = "Firstname is required";
  } else if (!isValidName(firstname.value.trim())) {
    firstnameError.textContent =
      "Firstname cannot contain numbers or special characters";
  }

  if (!lastname.value.trim()) {
    lastnameError.textContent = "Lastname is required";
  } else if (!isValidName(lastname.value.trim())) {
    lastnameError.textContent =
      "Lastname cannot contain numbers or special characters";
  }

  if (!email.value.trim()) {
    emailError.textContent = "Email is required";
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
  }

  if (!message.value.trim()) {
    messageError.textContent = "Message is required";
  }

  // If there are no errors, store form values into local storage
  if (
    !firstnameError.textContent &&
    !lastnameError.textContent &&
    !emailError.textContent &&
    !messageError.textContent
  ) {
    // Reset the Error Spaces
    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Create an object to store form values
    var formData = {
      firstname: firstname.value.trim(),
      lastname: lastname.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };

    // Convert form data to JSON string
    var formDataJSON = JSON.stringify(formData);

    // Store form data in local storage
    localStorage.setItem("contactFormData", formDataJSON);

    // Retrieve form data from local storage
    var storedFormData = localStorage.getItem("contactFormData");

    // Check if there is any stored form data
    if (storedFormData) {
      // Parse the JSON string back into a JavaScript object
      var formData = JSON.parse(storedFormData);

      // Now you can access the individual form values
      var storedFirstname = formData.firstname;
      var storedLastname = formData.lastname;
      var storedEmail = formData.email;
      var storedMessage = formData.message;

      // Example: Output the stored values to the console
      console.log("Stored Firstname:", storedFirstname);
      console.log("Stored Lastname:", storedLastname);
      console.log("Stored Email:", storedEmail);
      console.log("Stored Message:", storedMessage);
    } else {
      console.log("No stored form data found.");
    }

    // Submit the form
    alert("Thanks for your response.");
  }
}

// Function to validate email format
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  return emailRegex.test(email);
}

function isValidName(name) {
  var nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(name);
}
