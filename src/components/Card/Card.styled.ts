import styled from 'styled-components/macro';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 236px;
  min-height: 359px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 187px;

  & > img {
    height: 100%;
    width: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;
