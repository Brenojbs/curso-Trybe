'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('sales', [
    {
      total_price: 99222,
      delivery_address: 'Rua da Marmelada',
      delivery_number: '40028922',
      sale_date: new Date(),
      user_id: 1,
      seller_id: 2,
      status: 'Pendente',
    },
    {
      total_price: 8895,
      delivery_address: 'Casa numero 0',
      delivery_number: '11111111',
      sale_date: new Date(),
      user_id: 2,
      seller_id: 2,
      status: 'Pendente',
    },
    {
      total_price: 199,
      delivery_address: 'Catapimbas',
      delivery_number: '42228922',
      sale_date: new Date(),
      user_id: 1,
      seller_id: 2,
      status: 'Pendente',
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
