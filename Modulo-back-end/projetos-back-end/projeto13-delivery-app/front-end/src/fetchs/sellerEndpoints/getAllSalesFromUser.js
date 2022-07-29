import api from '../api';

async function getAllSalesFromUser() {
  const sales = await api
    .get('/seller/orders')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return sales;
}

export default getAllSalesFromUser;
