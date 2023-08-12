import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  width: 224px;
  padding: 10px 0;
`;

export const Center = styled.div`
  display: flex;
  width: 468px;
`;

export const Right = styled.div`
  display: flex;
  width: 140px;
  gap: 30px;
  position: relative;
`;

export const ItemsInCart = styled.div`
  position: absolute;
  top: -6px;
  left: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  background-color: var(--green);
  font-size: 8px;
`;
