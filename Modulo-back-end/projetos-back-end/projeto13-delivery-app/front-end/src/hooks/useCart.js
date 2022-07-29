import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

export default function useCart() {
  return useContext(CartContext);
}
