const nameField = document.getElementById('nameField')
const emailField = document.getElementById('emailField')
const messageField = document.getElementById('messageField')
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', async () => {
  let name = nameField.value;
  let email = emailField.value;
  let message = messageField.value;

  let params = {
    name: name,
    email: email,
    message: message
  }

  let response = await getRequest("http://marketing-website-server.obese_clown.repl.co/send-email", params)

  console.log(response)

  if (response.data.isValid)
  {
    alert("Email Sent Sucessfully")
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  }

  else
  {
    alert("Email Sent Unsucessfully")
  }
})