import styled from "styled-components";

export const Content = styled.div`
  grid-column: span 2 / auto;
  background-color: #f9f9fd;
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

export const Info = styled.div`
  text-align: center;
  font-size: 11px;
  padding: 0 5px;
  strong {
    color: #4286f4;
    font-weight: 400;
  }

  .fa-long-arrow-alt-right {
    color: #4286f4;
    padding: 0 2px 0 5px;
  }

  h3 {
    font-size: 10px;
    font-weight: 400;
    text-align: left;
  }
`;

export const Top = styled.div``;

export const Transfer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10%;

  h4 {
    flex: 20%;
    color: #f37335;
    font-weight: 400;
    position: relative;
  }
  span {
    flex: 30%;
    height: 1px;
    background-color: gray;
    align-self: center;
  }
`;

export const Time = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-top: 10px;
  :before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgb(128, 128, 128, 0.5);
    top: -5px;
  }
`;

export const Sity = styled.div`
  margin-top: 8px;
`;

export const Bottom = styled.div``;

export const Button = styled.button``;
