import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSeller, createSale } from '../../fetchs';
import useCart from '../../hooks/useCart';
import * as S from './styles';

function FormsNewOrder() {
  const { cart, cartTotal } = useCart();

  const [vendedores, setVendedores] = useState([]);
  const [currSeller, setCurrSeller] = useState(2);
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchSeller = async () => {
      const seller = await getAllSeller();
      if (seller) {
        setVendedores(seller);
      }
    };

    fetchSeller();
  }, [cart, history]);

  const submitOrder = async (event) => {
    event.preventDefault();

    const cartItens = cart.map(({ id, quantity }) => ({ id, quantity }));

    const sale = await createSale({
      sellerId: currSeller,
      totalPrice: cartTotal,
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      cart: cartItens,
    });

    history.push(`/customer/orders/${sale.id}`);
  };

  return (
    <S.form onSubmit={ submitOrder }>
      <S.h2>Detalhes e Endereço para Entrega</S.h2>
      <S.label htmlFor="vendedores">
        P.Vendedoresa Responsável
        {
          vendedores.length && (
            <S.select
              id="vendedores"
              data-testid="customer_checkout__select-seller"
              defaultValue={ 2 }
              onChange={ ({ target }) => setCurrSeller(Number(target.value)) }
            >
              {vendedores.map((vendedor, index) => (
                <option
                  key={ index }
                  value={ vendedor.id }
                >
                  { vendedor.name }
                </option>
              ))}
            </S.select>
          )
        }

      </S.label>
      <S.label htmlFor="endereço">
        Endereço
        <S.input
          type="text"
          name="endereço"
          id="endereço"
          value={ endereço }
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setEndereço(target.value) }
        />
      </S.label>
      <S.label htmlFor="numero">
        Número
        <S.input
          type="number"
          name="numero"
          id="numero"
          value={ numero }
          data-testid="customer_checkout__input-addressNumber"
          onChange={ ({ target }) => setNumero(target.value) }
        />
      </S.label>
      <S.button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ submitOrder }
      >
        FINALIZAR PEDIDO
      </S.button>
    </S.form>
  );
}

export default FormsNewOrder;
