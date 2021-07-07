import styled from "styled-components";

export const Content = styled.section`
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
  form {
    display: flex;
    flex-direction: column;
  }
  margin: 0px auto;
`;

export const Sort = styled.form``;
export const Filter = styled.form``;
export const Price = styled.div`
  span {
    width: 20px;
    display: inline-block;
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
  font-size: 11px;
  input {
    margin-top: 8px;
  }
`;
