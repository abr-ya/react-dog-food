import styled from "styled-components/macro";

export const Subtitle = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBlock = styled(Block)`
  flex-direction: row;
  justify-content: space-between;
  height: 448px;
  position: relative;
  margin-top: 10px;

  & > div {
    width: 45%;

    & > img {
      height: 100%;
      width: auto;
    }
  }

  & > .abs {
    position: absolute;
  }
`;

export const GrayBlock = styled.div`
  display: flex;
  background-color: #eceff180;
  min-height: 100px;
  border-radius: 12px;
  margin: 12px 0;
`;
