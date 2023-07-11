// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */
import styled from 'styled-components/macro';

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

export const Item = styled.div`
  transform-origin: 40px 40px;
  animation: Loader 1.2s linear infinite;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #eee;
  }

  &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  &:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  &:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  &:nth-child(8) {
    transform: rotate(-150deg);
    animation-delay: -0.4s;
  }
  &:nth-child(9) {
    transform: rotate(-120deg);
    animation-delay: -0.3s;
  }
  &:nth-child(10) {
    transform: rotate(-90deg);
    animation-delay: -0.2s;
  }
  &:nth-child(11) {
    transform: rotate(-60deg);
    animation-delay: -0.1s;
  }
  &:nth-child(12) {
    transform: rotate(-30deg);
    animation-delay: 0s;
  }
`;