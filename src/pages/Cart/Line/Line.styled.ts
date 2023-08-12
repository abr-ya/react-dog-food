import styled from 'styled-components/macro';

export const StyledLine = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  min-height: 90px;
  padding: 10px 0;
  border-bottom: 1px solid #eceff1;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;

  & > img {
    height: 100%;
    width: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 244px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > svg {
    cursor: pointer;
  }
`;
