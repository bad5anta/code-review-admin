export const requestUsers = async () => {
  const url = 'https://code-review.herokuapp.com/api/v1/users'

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJwYXNzd29yZCI6IiQyYSQxMCRFYUJFQnNGRy85VUhVRS83V3RvTjFlZ01yYS5KQUN4M1ZTT09vM0hPZHVYaUJqbHZCbEY5NiJ9fQ.83p-nCLcUZtqkWz09H-AfFIQM0aZsPopknawGIKpGpA'

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': token
    },
  });

  const users = await response.json();
  console.log('users', users);
  return users;
}
