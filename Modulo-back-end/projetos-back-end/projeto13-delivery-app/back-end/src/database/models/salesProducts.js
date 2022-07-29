module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: { name: 'saleId', field: 'sale_id' },
      otherKey: { name: 'productId', field: 'product_id'},
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', 
      through: SalesProduct,
      foreignKey: { name: 'productId', field: 'product_id'},
      otherKey: { name: 'saleId', field: 'sale_id' },
    });
  }

  return SalesProduct;
};