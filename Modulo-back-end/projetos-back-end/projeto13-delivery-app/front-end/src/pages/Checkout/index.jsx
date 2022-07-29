import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import useCart from '../../hooks/useCart';
import Header from '../../components/Header';
import Table from '../../components/table';
import FormsNewOrder from '../../components/forms/formNewOrder';
import div from './styles';

function Checkout() {
  const history = useHistory();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('user'))) {
      history.push('/login');
    }
  }, [history]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Table />
      </div>
      <div>
        <FormsNewOrder />
      </div>
    </div>
  );
}

export default Checkout;
