const requestToApi = async (url, methodType, body) => {
  if (methodType === 'GET') {
    const response = await fetch(url, {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).catch(function(error) {

    })
  } else if (methodType === 'PUT') {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json()
    }).catch(function(error) {

    })
  }
}

export default requestToApi
