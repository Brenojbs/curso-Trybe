import api from '../api';

async function getAllSales() {
  const sales = await api
    .get('/customer/sales')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return sales;
}

export default getAllSales;
