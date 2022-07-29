import styled from 'styled-components';

const CardProduct = styled.div`
border: 1px solid #EAF1EF;
display: flex;
flex-direction: column;
padding: 0.5em;
`;

export const Description = styled.div`
border: 1px solid #EAF1EF;
display: flex;
flex-direction: column;
align-items: center;
padding: 0.5em;
background: #F2FFFC;
`;

export const Button = styled.button`
background: #036B52;
color: white;
`;

export const Quantity = styled.div`
display: flex;
`;

export const Img = styled.img`
align-self: center;
`;

export const Price = styled.div`
  display: flex;
  width: min-content;
  padding: 0.4em;
  border-radius: 40%;
  position: absolute;
  border: 1px solid grey;
  background-color: #F2FFFC;
`;

export default CardProduct;
