import api from '../api';

async function getAllUsers() {
  const result = await api
    .get('/user')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default getAllUsers;
