const updateSaleStatus = require('../services/sales/updateSaleStatus');

let count = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    count += 1;
    console.log(`conectado ${count} vezes`);
    console.log(`com id: ${socket.id || io.id}`);

    socket.on('updateStatus', async ({ saleId, status }) => {
      try {
        await updateSaleStatus({ saleId, status });
        io.emit('statusUpdated', { saleId, status });
      } catch (error) {
        console.log(error);
        io.emit('error', 'unable to update status');
      }
    });
  });
};