function getRequest(url)
{
  axios.get(url).then(response => {
    console.log(response.data.data);
  });
}

function postRequest(url)
{
  axios.post(
    url,
    {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response.data.id);
  })
}

//getRequest("https://reqres.in/api/users/2");
//postRequest("https://reqres.in/api/register")