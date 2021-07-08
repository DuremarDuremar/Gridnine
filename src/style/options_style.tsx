import styled from "styled-components";

export const Content = styled.form`
  h2 {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
  label,
  input {
    cursor: pointer;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
  margin: 0px auto;
`;

export const Sort = styled.div``;
export const Filter = styled.div``;
export const Price = styled.div`
  span {
    width: 20px;
    display: inline-block;
    font-size: 10px;
  }
  input {
    border: 1px solid rgb(0, 0, 0, 0.5);
    max-width: 130px;
    font-size: 12px;
    padding: 2px 0 2px 5px;
  }
`;
export const Air = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 8px;
  }
`;

export const AirItem = styled.span`
  font-size: 9px;
  text-align: center;
`;

export const Buttons = styled.div`
  min-height: 30px;
  display: flex;
  justify-content: space-around;
  background: #dd3e54;
  background: -webkit-linear-gradient(to right, #dd3e54, #6be585);
  background: linear-gradient(to right, #dd3e54, #6be585);
  max-width: 135px;
  margin-left: 20px;

  button {
    background: transparent;
    flex: 50%;
    text-align: center;

    :hover i {
      opacity: 1;
    }
  }
  i {
    transition: all 0.5s ease-out;
    opacity: 0;
    color: #f9f9fd;
  }
`;
