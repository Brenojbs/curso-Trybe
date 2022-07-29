const userRoute = require('./userRoute');
const productsRoute = require('./products');
const sellerRoute = require('./sellerRoute');
const loginRoute = require('./login');
const sales = require('./sales');
const adminRoute = require('./adminRoute');

module.exports = {
  userRoute,
  productsRoute,
  sellerRoute,
  loginRoute,
  salesRoute: sales,
  adminRoute,
};