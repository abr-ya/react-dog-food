import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 236px;
  min-height: 359px;
  margin-bottom: 40px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 187px;
  overflow: hidden;

  & > img {
    height: 100%;
    width: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

export const NavLink = styled(Link)`
  &:hover {
    color: #777;
  }
`;
