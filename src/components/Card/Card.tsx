import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { ButtonWrapper, ImageWrapper, NavLink, OldPrice, StyledCard, TextWrapper } from './Card.styled';
import { Btn, BodyS3, H3ExtraBold } from '../Common.styled';

// наверняка будут ещё пропсы
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICard extends IProduct {}

const Card: FC<ICard> = ({ discount, name, pictures, price, stock, _id: id }) => {
  const isSale = discount > 0;
  const realPrice: number = (price * (100 - discount)) / 100;

  return (
    <StyledCard>
      <ImageWrapper>
        <img src={pictures} alt={name} />
      </ImageWrapper>
      <TextWrapper>
        {/* isSale && but height */}
        <OldPrice>{isSale ? `${price} ₽` : ''}</OldPrice>
        <H3ExtraBold $isred={isSale}>{realPrice} ₽</H3ExtraBold>
        <BodyS3>{stock} шт</BodyS3>
        <NavLink to={`/product/${id}`}>{name}</NavLink>
      </TextWrapper>
      <ButtonWrapper>
        <Btn>В корзину</Btn>
      </ButtonWrapper>
    </StyledCard>
  );
};

export default Card;
