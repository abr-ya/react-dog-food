import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { ButtonWrapper, ImageWrapper, NavLink, StyledCard, TextWrapper } from './Card.styled';
import { Btn, BodyS3, H3ExtraBold, OldPrice } from '../Common.styled';
import { strCut } from '../../lib/common';

// наверняка будут ещё пропсы
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICard extends IProduct {
  toCart: () => void;
}

const Card: FC<ICard> = ({ discount, name, pictures, price, stock, _id: id, toCart }) => {
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
        <NavLink to={`/product/${id}`}>{strCut(name, 55)}</NavLink>
      </TextWrapper>
      <ButtonWrapper>
        <Btn onClick={toCart} disabled={!stock}>
          В корзину
        </Btn>
      </ButtonWrapper>
    </StyledCard>
  );
};

export default Card;
