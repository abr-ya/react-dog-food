import styled from 'styled-components/macro';

export const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ItemsWrapper = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Right = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 2px 16px 0px #60617029;
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #eceff180;
  border-radius: 12px;
`;
