document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = e.target[0].value;
    let message = e.target[1].value;

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent!");
          e.target.reset(); // to clear the form
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) =>
        alert("Error sending message. Please try again later.")
      );
  });
