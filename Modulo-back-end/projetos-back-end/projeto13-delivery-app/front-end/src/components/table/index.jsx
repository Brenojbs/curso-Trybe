import React from 'react';
import useCart from '../../hooks/useCart';
import * as S from './styles';

function Table() {
  const { cart, cartTotal, updateCart } = useCart();

  return (
    <S.div>
      <S.caption>Finalizar Pedido</S.caption>
      <S.table>
        <S.thead>
          <S.tr>
            <S.th>Item</S.th>
            <S.th>Descrição</S.th>
            <S.th>Quantidade</S.th>
            <S.th>Valor Unitário</S.th>
            <S.th>Sub-total</S.th>
            <S.th>Remover Item</S.th>
          </S.tr>
        </S.thead>
        <S.tbody>
          {cart.map((cartItem, index) => (
            <S.tr key={ index }>
              <S.td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </S.td>
              <S.td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { cartItem.name }
              </S.td>
              <S.td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { cartItem.quantity }
              </S.td>
              <S.td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {
                  Number(cartItem.price)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              </S.td>
              <S.td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {
                  (Number(cartItem.price) * Number(cartItem.quantity))
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              </S.td>
              <S.td>
                <S.button
                  type="button"
                  onClick={ () => updateCart(cartItem, 0) }
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover
                </S.button>
              </S.td>
            </S.tr>
          ))}
        </S.tbody>
        <S.tfoot>
          <S.tr>
            <S.td data-testid="customer_checkout__element-order-total-price">
              {
                `Total: ${Number(cartTotal)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
              }
            </S.td>
          </S.tr>
        </S.tfoot>
      </S.table>
    </S.div>
  );
}

export default Table;
