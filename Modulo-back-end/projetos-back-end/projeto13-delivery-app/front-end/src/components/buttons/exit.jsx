import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Exit() {
  const history = useHistory();
  const getOut = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <button type="button" onClick={ getOut }>
      Sair
    </button>
  );
}
