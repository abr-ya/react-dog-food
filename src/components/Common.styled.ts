import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  max-width: 992px;
  margin: auto;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border: 1px solid var(--primary);
  border-radius: 55px;
  background: var(--primary);
  color: var(--text-main);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  appearance: button;

  & > svg {
    margin-right: 8px;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

//styleName: Header : H3/ExtraBold;
export const H3ExtraBold = styled.h3<{ isRed?: boolean }>`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0em;
  color: var(--text-main);
  text-align: left;
  margin: 0;

  ${({ isRed }) =>
    isRed &&
    css`
      color: var(--red);
    `}
`;

//styleName: Body : S1/Regular;
export const BodyS3 = styled.span`
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #7b8e98;
`;
