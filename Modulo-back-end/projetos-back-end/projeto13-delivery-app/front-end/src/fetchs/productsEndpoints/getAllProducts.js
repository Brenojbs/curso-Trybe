import api from '../api';

async function getAllProducts() {
  const products = await api
    .get('/customer/products')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return products;
}

export default getAllProducts;
