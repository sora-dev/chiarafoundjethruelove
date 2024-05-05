function submitForm() {
  var name = document.getElementById("name").value;
  var attendWedding = document.querySelector(
    'input[name="Attend wedding"]:checked'
  );
  var message = document.getElementById("message").value;

  var formData = {
    name: name,
    attendWedding: attendWedding ? attendWedding.value : "",
    message: message,
  };

  // Make a POST request to the serverless function endpoint
  fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      // Handle successful form submission
      console.log(data);
      document.querySelector(".form_status_message").innerHTML =
        '<div class="alert alert-success">Form submitted successfully.</div>';
    })
    .catch((error) => {
      // Handle errors
      console.error("There was an error!", error);
      document.querySelector(".form_status_message").innerHTML =
        '<div class="alert alert-danger">An error occurred. Please try again later.</div>';
    });
}
