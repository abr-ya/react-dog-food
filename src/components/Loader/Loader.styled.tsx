/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const Item = styled.div<{ $delay: number; $rotate: number }>`
  transform-origin: 40px 40px;
  animation: loader 1.2s linear infinite;

  ${({ $delay, $rotate }) =>
    css`
      transform: rotate(${$rotate}deg);
      animation-delay: ${$delay}s;
    `}

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #eee;
  }
`;
