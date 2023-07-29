import { FC } from 'react';
import { IProductInCart } from '../../../interfaces';
import { Block, ImageWrapper, StyledLine, TextWrapper } from './Line.styled';
import { NumberInput } from '../../../components/';
import { BodyS3, H3ExtraBold, OldPrice } from '../../../components/Common.styled';
import { strCut } from '../../../lib/common';

interface ILine extends IProductInCart {
  plus?: () => void;
  minus?: () => void;
  updateHandler: (id: string, value: number) => void;
}

const Line: FC<ILine> = ({ discount, name, pictures, price, stock, wight, value, _id: id, updateHandler }) => {
  const isSale = discount > 0;
  const realPrice: number = (price * (100 - discount)) / 100;

  const saveHandler = (value: number) => {
    updateHandler(id, value);
  };

  return (
    <StyledLine>
      <ImageWrapper>
        <img src={pictures} alt={name} />
      </ImageWrapper>
      <TextWrapper>
        <>{strCut(name, 55)}</>
        <BodyS3>{wight}</BodyS3>
      </TextWrapper>
      <Block>
        <NumberInput value={value} saveHandler={saveHandler} max={stock} />
      </Block>
      <Block>
        {isSale && <OldPrice>{`${price} ₽`}</OldPrice>}
        <H3ExtraBold $isred={isSale}>{realPrice} ₽</H3ExtraBold>
      </Block>
      <Block>del</Block>
    </StyledLine>
  );
};

export default Line;
