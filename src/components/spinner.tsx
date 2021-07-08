import React from "react";
import styled, { keyframes } from "styled-components";

export const rotate = (n: any) => keyframes`
 0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(${n});
    transform: rotate(${n});
  }
`;

const IdsCss = styled.div<{ top?: boolean; directors?: boolean }>`
  margin: 0 auto;
  ${(props) =>
    props.top &&
    `
    position:fixed;
    left: 50%;
    transform: translateX(-50%);
    `}
  ${(props) =>
    props.directors &&
    `
    left: 15%;
    position:fixed;
    top: 50%;
    transform: translateY(-50%);
    `}
`;
const IdsDoubleRing = styled.div`
  position: relative;
  width: 77px !important;
  height: 77px !important;
  -webkit-transform: translate(-38.5px, -38.5px) scale(0.385)
    translate(38.5px, 38.5px);
  transform: translate(-38.5px, -38.5px) scale(0.385) translate(38.5px, 38.5px);
  div {
    position: absolute;
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    border: 8px solid #000;
    border-color: #00bc8c transparent #00bc8c transparent;
    -webkit-animation: ${rotate("360deg")} 1.5s linear infinite;
    animation: ${rotate("360deg")} 1.5s linear infinite;
    :nth-child(2) {
      width: 140px;
      height: 140px;
      top: 30px;
      left: 30px;
      border-color: transparent #fff transparent #fff;
      -webkit-animation: ${rotate("-360deg")} 1.5s linear infinite;
      animation: ${rotate("-360deg")} 1.5s linear infinite;
    }
  }
`;

type SpinnerProps = {
  top?: boolean;
  directors?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ top, directors }) => {
  return (
    <IdsCss top={top} directors={directors}>
      <IdsDoubleRing>
        <div></div>
        <div></div>
      </IdsDoubleRing>
    </IdsCss>
  );
};

export default Spinner;
