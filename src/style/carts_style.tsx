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
  padding: 3px 5px;
  background-color: #4286f4;
  color: #f9f9fd;
  display: flex;
  justify-content: space-between;
  h5 {
    font-weight: 400;
    font-size: 13px;
    text-align: right;
  }
  p {
    font-size: 9px;
  }
`;

export const Logo = styled.div``;

export const Info = styled.div``;

export const Button = styled.button``;
