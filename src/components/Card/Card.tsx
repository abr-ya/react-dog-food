import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { ButtonWrapper, ImageWrapper, StyledCard, TextWrapper } from './Card.styled';

// наверняка будут ещё пропсы
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICard extends IProduct {}

const Card: FC<ICard> = ({ name, picture, price, stock }) => {
  return (
    <StyledCard>
      <ImageWrapper>
        <img src={picture} alt={name} />
      </ImageWrapper>
      <TextWrapper>
        <div>{price}</div>
        <div>{stock}</div>
        <div>{name}</div>
      </TextWrapper>
      <ButtonWrapper>button</ButtonWrapper>
    </StyledCard>
  );
};

export default Card;
