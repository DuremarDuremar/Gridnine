import styled from "styled-components";

export const Content = styled.div`
  grid-column: span 2 / auto;
  background-color: #616141;
`;

export const Card = styled.div`
  border: 1px solid black;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  background-color: #4286f4;
`;

export const Info = styled.div``;

export const Button = styled.button``;
