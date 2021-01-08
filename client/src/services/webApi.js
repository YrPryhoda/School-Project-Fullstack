const URL = 'http://localhost:5000';

export const callApi = async (endpoint, props = { method: 'GET' }) => {
  const api = `${URL}${endpoint}`;

  if (props.method === 'GET' && props.body) {
    throw Error('Request GET does not allow request body')
  }

  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: props.method,
    body: JSON.stringify(props.body)
  }
  const data = await fetch(api, config)

  return data.json()
}