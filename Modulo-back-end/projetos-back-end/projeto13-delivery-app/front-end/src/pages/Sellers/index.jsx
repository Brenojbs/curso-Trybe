import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import Header from '../../components/Header';
import { getAllSalesFromUser } from '../../fetchs';

function SellerOrders() {
  const [pedidos, setPedidos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) history.push('/login');

    const fetchSeller = async () => {
      const listaDePedidos = await getAllSalesFromUser();
      if (listaDePedidos) {
        setPedidos(listaDePedidos);
      }
    };
    fetchSeller();

    const newSocket = io('http://localhost:3001');

    newSocket.on('connect', () => console.log('socket connected'));
    newSocket.on('statusUpdated', async () => fetchSeller());
    return () => newSocket.close();
  }, [history]);

  return (
    <div>
      <Header />
      <div>
        { pedidos.length && pedidos.map((cardItem, index) => (
          <Link
            key={ index }
            to={ `/seller/orders/${cardItem.id}` }
          >
            <ul>
              <li
                data-testid={
                  `seller_orders__element-order-id-${cardItem.id}`
                }
              >
                { cardItem.id }
              </li>
              <li
                data-testid={
                  `seller_orders__element-delivery-status-${cardItem.id}`
                }
              >
                { cardItem.status }
              </li>
              <li
                data-testid={
                  `seller_orders__element-order-date-${cardItem.id}`
                }
              >
                { moment(cardItem.saleDate).format('DD/MM/YYYY') }
              </li>
              <li
                data-testid={
                  `seller_orders__element-card-price-${cardItem.id}`
                }
              >
                {
                  Number(cardItem.totalPrice)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    .replace('.', '')
                }
              </li>
              <li
                data-testid={
                  `seller_orders__element-card-address-${cardItem.id}`
                }
              >
                { `${cardItem.deliveryAddress} ${cardItem.deliveryNumber}` }
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SellerOrders;
