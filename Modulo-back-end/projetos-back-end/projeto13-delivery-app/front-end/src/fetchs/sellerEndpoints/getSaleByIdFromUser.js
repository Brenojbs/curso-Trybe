import api from '../api';

async function getSaleById(token, orderId) {
  const saleDetails = await api
    .get(`/sales/${orderId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return saleDetails;
}

export default getSaleById;
