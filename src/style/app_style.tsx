import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2c3e50;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; // Yeah, yeah everybody write about it
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}   
`;

export const Content = styled.div`
  max-width: 1320px;
  min-height: 100vh;
  margin: 0px auto;
  background: #f9f9fd;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
  position: relative;
`;

export const Up = styled.i`
  position: fixed;
  bottom: 40px;
  color: #f37335;
  cursor: pointer;
`;
