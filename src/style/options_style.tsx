import styled from "styled-components";

export const Content = styled.form`
  h2 {
    margin-top: 8px;
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
  label {
    display: flex;
    margin-top: 10px;
  }

  p {
    width: 20px;
    font-size: 13px;
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
