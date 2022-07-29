import api from '../api';

async function getAllSeller() {
  const seller = await api
    .get('/seller')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return seller;
}

export default getAllSeller;
