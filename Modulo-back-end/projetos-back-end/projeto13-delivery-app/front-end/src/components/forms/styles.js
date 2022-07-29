import styled from 'styled-components';

const FormCreateAnyUser = styled.form`
  margin-bottom: 50px;
`;

export const form = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
flex-direction: column;
`;

export const label = styled.label`
  width: 20em;
`;

export const input = styled.input`
display: block;
width: -webkit-fill-available;
box-shadow: 5px 10px 5px #888888;
height: 2em;
font-size: 18px;
border: 1px solid #888888;
border-radius: 5px;
padding: 0 0 0 0.5em;
`;

export const h2 = styled.h2`
width: 20em;
height: 2em;
border-radius: 1em;
margin-top: 20em;
background: #E5E5E5;
border: 1px solid #5d5e5e;
font-family: Roboto;
font-style: normal;
font-size: 15px;
padding-top: 1em;
padding-left: 2rem;
`;

export const button = styled.button`
  background: var(--gray-100);
  width: 5,5rem;
  height: 3em;
  border-radius: 3px;
  border: 2px solid var(--gray-100);
  color: black;
  margin: center;
  padding: 0.25em;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const select = styled.select`
  margin-top: 500%;
  margin-bottom: 500%;
  background: var(--crimson);
  border-radius: 3px;
  border: 2px solid var(--crimson);
  color: black;
  padding: 0.25em 1em;
  font-size: 15px;
`;

export default FormCreateAnyUser;
