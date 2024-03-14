function validateContactForm() {
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var formErrorMessage = document.getElementById("formErrorMessage");

  // Reset error messages
  formErrorMessage.innerHTML = "";
  document.getElementById("firstnameError").innerHTML = "";
  document.getElementById("lastnameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  var isValid = true;

  // Validate Firstname
  if (firstname === "") {
    document.getElementById("firstnameError").innerHTML =
      "Please enter your firstname.";
    isValid = false;
  }
  // Validate the Symbols in Firstname
  if (!/^[a-zA-Z]+$/.test(firstname)) {
    document.getElementById("firstnameError").innerHTML =
      "Firstname must not contain numbers or special characters.";
    isValid = false;
  }

  // Validate Lastname
  if (lastname === "") {
    document.getElementById("lastnameError").innerHTML =
      "Please enter your lastname.";
    isValid = false;
  }

  // Validate lastname with Symbols
  if (!/^[a-zA-Z]+$/.test(lastname)) {
    document.getElementById("lastnameError").innerHTML =
      "Firstname must not contain numbers or special characters.";
    isValid = false;
  }

  // Validate Email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").innerHTML =
      "Please enter your message.";
    isValid = false;
  }

  if (!isValid) {
    formErrorMessage.innerHTML = "Form is not Validated.";
    formErrorMessage.style.color = "red";
  } else {
    // Form submission logic goes here
    formErrorMessage.innerHTML = "Form submitted successfully.";
    formErrorMessage.style.color = "green";
    // You can submit the form or perform further actions here
  }
}
