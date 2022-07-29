import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({
  updateCart: () => {},
  cart: [],
  cartTotal: 0,
});

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addProduct = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const updateProduct = (id, quantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) return ({ ...product, quantity });
      return product;
    });
    setCart(updatedCart);
  };

  const updateCart = (product, quantity) => {
    const isProductOnCart = cart.find((cartProduct) => cartProduct.id === product.id);

    if (!isProductOnCart && quantity > 0) return addProduct(product, quantity);

    if (quantity > 0) return updateProduct(product.id, quantity);

    return removeProduct(product.id);
  };

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  return (
    <CartContext.Provider
      value={ {
        updateCart,
        cart,
        cartTotal,
      } }
    >
      { children }
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default CartContextProvider;
