import api from '../api';

async function loginUser(user) {
  const token = await api
    .post('/login', user)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return token;
}

export default loginUser;
