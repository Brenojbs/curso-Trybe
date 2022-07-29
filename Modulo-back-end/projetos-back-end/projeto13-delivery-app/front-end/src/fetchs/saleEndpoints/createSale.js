import api from '../api';

async function createSale(sale) {
  const saleResult = await api
    .post('/customer/sales', sale)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return saleResult;
}

export default createSale;
