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
  border-radius: 55px;
  border: 1px solid var(--primary);
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

export const BtnGhost = styled(Btn)`
  border: 1px solid var(--text-outline);
  background: var(--white);
  color: var(--text-main);
`;

export const BtnLink = styled(Btn)`
  border: none;
  background: var(--white);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 10px 0;

  & > svg {
    margin-right: 8px;
  }
`;

//styleName: Header : H1/ExtraBold;
export const H1ExtraBold = styled.h1`
  font-family: Nunito;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

//styleName: Header : H2/ExtraBold;
export const H2ExtraBold = styled.h2`
  font-family: Nunito;
  font-size: 24px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

//styleName: Header : H3/ExtraBold;
export const H3ExtraBold = styled.h3<{ $isred?: boolean }>`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0em;
  color: var(--text-main);
  text-align: left;
  margin: 0;

  ${({ $isred }) =>
    $isred &&
    css`
      color: var(--red);
    `}
`;

//styleName: Body : P1;
export const BodyP1 = styled.p<{ $weight?: number }>`
  font-family: Nunito;
  font-size: 16px;
  font-weight: ${({ $weight = 400 }) => $weight};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

//styleName: Body : P2;
export const BodyP2 = styled.p<{ $color?: 'primary' | 'dark' | 'light'; $weight?: number }>`
  font-family: Nunito;
  font-size: 14px;
  font-weight: ${({ $weight = 400 }) => $weight};
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  ${({ $color }) =>
    $color === 'primary' &&
    css`
      color: var(--primary);
    `}
  ${({ $color }) =>
    $color === 'dark' &&
    css`
      color: var(--primary-dark);
    `}
  ${({ $color }) =>
    $color === 'light' &&
    css`
      color: var(--primary-light);
    `}
`;

//styleName: Body : S1 SemiBold = 600;
export const BodyS1 = styled.span<{ $weight?: number }>`
  font-family: Nunito;
  font-size: 12px;
  font-weight: ${({ $weight = 400 }) => $weight};
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
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

export const OldPrice = styled.span`
  font-size: 12px;
  font-weight: 600;
  height: 14px;
  letter-spacing: 0em;
  color: var(--text-main);
  text-decoration: line-through;
`;
