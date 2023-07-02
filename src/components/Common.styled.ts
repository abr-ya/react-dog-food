import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 992px;
  margin: auto;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-right: 8px;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
