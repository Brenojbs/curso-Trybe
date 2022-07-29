import api from '../api';

async function createUser(user) {
  const result = await api
    .post('/user', user)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default createUser;
