export const requestToken = async () => {
  const url = 'https://code-review.herokuapp.com/api/v1/sessions';


  const users = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(
        {
          "user": {
        		"email": "user@example.com",
        		"password": "password"
	         }
         }
     )
  });

  return users;
}
