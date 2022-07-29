import styled from 'styled-components';

export const ErrorMessage = styled.div`
display:none;
  &.error {
    display: block;
  }
background: yellow;
position: absolute;
top: 0;
padding: 1em;
border-radius: 5px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`;

export const Input = styled.input`
display: block;
width: -webkit-fill-available;
box-shadow: 5px 10px 5px #888888;
height: 2em;
font-size: 18px;
border: 1px solid #888888;
border-radius: 5px;
padding: 0 0 0 0.5em;
`;

export const Label = styled.label`
width: 100%;
`;

export const Body = styled.div`
width: 30vw;
max-width: 300px;
padding: 1em;
border-radius: 1em;
display: flex;
background: #E5E5E5;
flex-direction: column;
margin: 30vh auto 0 auto;
border: 1px solid #5d5e5e;
font-family: Roboto;
font-style: normal;
font-size: 28px;
line-height: 100%;
align: center;
vertical-align: center;
`;

export const Button = styled.button`
  &:disabled {
    background: transparent;
    color: #880808;
  }

  background: #036B52;
  width: 100%;
  height: 4em;
  border-radius: 3px;
  border: 2px solid #036B52;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.2s;
`;
