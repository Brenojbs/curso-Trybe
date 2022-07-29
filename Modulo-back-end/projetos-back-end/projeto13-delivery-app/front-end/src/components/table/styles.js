import styled from 'styled-components';

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

export const div = styled.div`
background: white;
top: 0;
padding: 1em;
border-radius: 5px;
display: box;
justify-content: center;
align-items: center;
`;

export const caption = styled.caption`
background-color: var(--white);
color: black;
padding: 10px;
display: inline-flex;
margin-left: 9em;
`;

export const table = styled.table`
background: var(--silk);
color: black;
font-size: 10px;
display: box;
justify-content: center;
align-items: center;
gap: 1rem;
`;

export const tbody = styled.tbody`
background-color: var(--white);
padding: 05px;

`;

export const thead = styled.thead`
background-color: var(--white);
padding: 05px;

`;

export const td = styled.td`
background-color: var(--pink);
padding: 05px;

`;

export const th = styled.th`
background-color: var(--white);
padding: 05px;

// margin-left: 3px;
`;

export const tr = styled.tr`
background: var(--white);
padding: 05px;

`;

export const tfoot = styled.tfoot`
background-color: var(--white);
`;
