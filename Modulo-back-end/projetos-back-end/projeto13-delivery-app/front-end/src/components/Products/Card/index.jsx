import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useCart from '../../../hooks/useCart';
import CardProduct, { Price, Description, Button, Quantity, Img } from './styles';

function ProductsCard({ product }) {
  const { id, name, url_image: urlImage, price } = product;
  const [quantity, setQuantity] = useState(0);
  const { updateCart } = useCart();

  const removeQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 0) setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  const handleChange = (newQuantity) => {
    if (newQuantity < 0) setQuantity(0);
    else setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  return (
    <CardProduct>

      <Img
        src={ urlImage }
        alt={ name }
        height={ 150 }
        width={ 130 }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Price data-testid={ `customer_products__element-card-price-${id}` }>
        { Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </Price>

      <Description>

        <div data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </div>

        <Quantity>
          <Button
            type="button"
            onClick={ removeQuantity }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </Button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ ({ target }) => handleChange(Number(target.value)) }
          />
          <Button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ addQuantity }
          >
            +
          </Button>
        </Quantity>
      </Description>

    </CardProduct>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductsCard;
