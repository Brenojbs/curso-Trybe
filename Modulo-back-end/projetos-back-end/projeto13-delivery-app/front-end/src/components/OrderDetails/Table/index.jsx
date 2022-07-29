import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { product.id }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                { product.quantity }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                { Number(product.price)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-total-price-${index}`
                }
              >
                { (Number(product.price) * Number(product.SalesProduct.quantity))
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  products: PropTypes.arrayOf({}),
}.isRequired;

export default OrderDetailsTable;
