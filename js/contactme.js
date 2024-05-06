function validateContactForm(event) {
  const loadingDiv = document.querySelector(".center");
  event.preventDefault(); // Prevent the default form submission behavior

  // Fetching form inputs
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    document.getElementById("formErrorMessage").innerText =
      "Please fill in all fields";
    return;
  }

  // Prepare data for POST request
  var formData = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    message: message,
  };
  loadingDiv.style.display = "flex";
  // Send POST request using Fetch API
  fetch("https://my-brand-backend-server.onrender.com/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Request was successful
        loadingDiv.style.display = "none";
        return response.json();
      } else {
        // Request failed
        loadingDiv.style.display = "none";
        throw new Error("Failed to send message");
      }
    })
    .then((data) => {
      loadingDiv.style.display = "none";
      document.getElementById("formErrorMessage").innerText =""
      // Handle successful response
      console.log(data); // You can do something with the response data here
      // For example, display a success message to the user
      alert("Message sent successfully!");
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
      // Display error message to the user
      document.getElementById("formErrorMessage").innerText =
        "Failed to send message. Please try again later.";
    });
}
