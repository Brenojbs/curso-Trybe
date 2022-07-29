import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
import Header from '../../components/Header';
import OrderDetailsTable from '../../components/OrderDetails/Table';
import getSaleById from '../../fetchs/saleEndpoints/getSaleById';

const STATUS = 'customer_order_details__element-order-details-label-delivery-status';

function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({
    id: 0,
    totalPrice: String(),
    deliveryAddress: String(),
    deliveryNumber: String(),
    saleDate: String(),
    status: String(),
    user: {
      id: Number(),
      name: String(),
      role: String(),
    },
    seller: {
      id: Number(),
      name: String(),
      role: String(),
    },
    products: [],
  });
  const [socket, setSocket] = useState({});

  const changeStatus = () => {
    socket.emit('updateStatus', { saleId: orderId, status: 'Entregue' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getSaleById(orderId);
      setOrder(orderData);
    };
    fetchData();

    const newSocket = io('http://localhost:3001');

    newSocket.on('connect', () => console.log('socket connected'));
    newSocket.on('statusUpdated', ({ status }) => {
      setOrder((prev) => ({ ...prev, status }));
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [orderId]);

  const orderIdLength = 4;

  return (
    <>
      <Header />
      {
        order.id && (
          <main>
            <div>
              <span
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                { `Pedido ${String(order.id).padStart(orderIdLength, '0')}` }
              </span>
              <span
                data-testid={
                  `customer_order_details__element-order-details-label-seller-name${''}`
                }
              >
                { order.seller.name }
              </span>
              <span
                data-testid={
                  `customer_order_details__element-order-details-label-order-date${''}`
                }
              >
                { moment(order.saleDate).format('DD/MM/YYYY') }
              </span>
              <span
                data-testid={ STATUS }
              >
                { order.status }
              </span>
              <button
                type="button"
                disabled={ !order.status.includes('Em Trânsito') }
                onClick={ changeStatus }
                data-testid="customer_order_details__button-delivery-check"
              >
                Marcar como entregue
              </button>
            </div>

            <OrderDetailsTable products={ order.products } />

            <div data-testid="customer_order_details__element-order-total-price">
              { Number(order.totalPrice)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </div>
          </main>
        )
      }
    </>
  );
}

export default OrderDetails;
