import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
import Header from '../../components/Header';
import OrderDetailsTable from '../../components/OrderDetailsSeller';
import getSaleById from '../../fetchs/saleEndpoints/getSaleById';

const STATUS = 'seller_order_details__element-order-details-label-delivery-status';
const DATE = 'seller_order_details__element-order-details-label-order-date';

function OrderDetailsSeller() {
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

  const changeStatus = (status) => {
    socket.emit('updateStatus', { saleId: orderId, status });
  };

  useEffect(() => {
    const fetchData = async () => {
      const sales = await getSaleById(orderId);
      setOrder(sales);
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
      <main>
        {
          order.id && (
            <>
              <div>
                <span
                  data-testid="seller_order_details__element-order-details-label-order-id"
                >
                  { `Pedido ${String(order.id).padStart(orderIdLength, '0')}` }
                </span>
                <span
                  data-testid={ DATE }
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
                  disabled={ !order.status.includes('Pendente') }
                  onClick={ () => changeStatus('Preparando') }
                  data-testid="seller_order_details__button-preparing-check"
                >
                  PREPARAR PEDIDO
                </button>
                <button
                  type="button"
                  disabled={ !order.status.includes('Preparando') }
                  onClick={ () => changeStatus('Em Trânsito') }
                  data-testid="seller_order_details__button-dispatch-check"
                >
                  SAIU PARA ENTREGA
                </button>
              </div>

              <OrderDetailsTable products={ order.products } />

              <div data-testid="seller_order_details__element-order-total-price">
                { Number(order.totalPrice)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
              </div>
            </>
          )
        }
      </main>
    </>
  );
}

export default OrderDetailsSeller;
