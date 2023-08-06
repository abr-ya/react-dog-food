import { useNavigate } from "react-router-dom";
import { Content, NotFoundWrapper } from "./NotFound.styled";
import { BodyP1, BtnGhost } from "../Common.styled";
import { ReactComponent as SadIcon } from "./ic-notfound.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <Content>
        <SadIcon />
        <BodyP1 $weight={600}>Простите, по вашему запросу товаров не найдено</BodyP1>
        <BtnGhost onClick={() => navigate("/")}>на главную</BtnGhost>
      </Content>
    </NotFoundWrapper>
  );
};

export default NotFound;
