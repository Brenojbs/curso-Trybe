import styled from 'styled-components';

export const Header = styled.header`
display: flex;
height: 4em;
`;

export const Nav = styled.nav`
display: flex;
width: 100%;
`;

export const Span = styled.span`
display: flex;
color: black;

  &:nth-child(1) {
    background: #2FC18C;
  }
  &:nth-child(2) {
    flex-grow: 1;
    background: #036B52;
  }
  &:nth-child(3) {
    background: #421981;
  }
  &:nth-child(4) {
    background: #056CF9;
  }
`;
