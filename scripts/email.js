const nameField = document.getElementById('nameField')
const emailField = document.getElementById('emailField')
const messageField = document.getElementById('messageField')
const submitButton = document.getElementById('submitButton')

function sendEmail(email, subject, body)
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "joeyqsa211@gmail.com",
    Password : "bfbchjcndieleqyt",
    To : email,
    From : "joeyqsa211@gmail.com",
    Subject : subject,
    Body : body
  }).then(
    message => alert("Message To " + email + " Sent Successfully")
  );
}

submitButton.addEventListener('click', async () => {
  let name = nameField.value;
  let email = emailField.value;
  let message = messageField.value;

  let params = {
    name: name,
    email: email,
    message: message
  }

  let response = await getRequest("http://marketing-website-server.obese_clown.repl.co/verify-email", params)

  if (response.data.isValid)
  {
    sendEmail(email, "Email To " + name, message);
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  }
})