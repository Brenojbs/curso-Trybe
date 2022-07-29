import api from '../api';

async function getAllUsers(email) {
  const result = await api
    .get(`/user/${email}`)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default getAllUsers;
