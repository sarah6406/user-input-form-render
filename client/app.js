const form = document.getElementById("message-form");

function handleSubmit(e) {
  e.preventDefault();
  const username = e.target.username.value;
  const message = e.target.message.value;

  console.log({
    username: username,
    message: message,
  });

  //make a request to the server with our form data as the body
  fetch("http://localhost:5000/message", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);
