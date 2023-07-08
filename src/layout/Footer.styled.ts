import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 224px;
`;

export const Left = styled.div`
  display: flex;
  width: 224px;
  padding: 10px 0;
`;

export const Menu1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
`;

export const Menu2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
`;

export const Right = styled.div`
  display: flex;
  width: 170px;
  flex-direction: column;
  gap: 20px;
`;

export const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 114px;
`;

export const CopyText = styled.div`
  font-size: 9px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #1a1a1a;
`;

export const RightTitle = styled.div`
  display: flex;
`;

export const RightContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightIcons = styled.div`
  display: flex;
  gap: 10px;
  opacity: 40%;
`;
