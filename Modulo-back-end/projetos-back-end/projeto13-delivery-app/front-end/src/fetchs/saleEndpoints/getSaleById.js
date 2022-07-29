import api from '../api';

async function getSaleById(orderId) {
  const saleResult = await api
    .get(`/customer/orders/${orderId}`)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return saleResult;
}

export default getSaleById;
