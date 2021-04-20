var getRequest = async function(url, params)
{
  return await axios.get(url, {
    params: params
  })
}

var postRequest = async function(url)
{
  return axios.post(url, {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}