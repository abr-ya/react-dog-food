import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/typedRedux';
import { BodyP1, BodyP2, BtnLink, H1ExtraBold, H2ExtraBold } from '../components/Common.styled';
import { Loader, NotFound } from '../components';
import { Block, ImgBlock, MainWrapper, Subtitle } from './Product.styled';
import { Rating, Tag } from '../atoms';
import { RootStateType } from '../app/store';
import { getProduct } from '../features/products/productSlice';
import { ArrowLeftIcon } from '../components/icons';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useAppSelector((state: RootStateType) => state.productDetail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [id]);

  if (isLoading) return <Loader />;
  if (data === null) return <NotFound />; // todo: гибкий текст!

  const { _id, description, discount, name, pictures } = data;

  const picture = Array.isArray(pictures) ? pictures[0] : pictures; // todo temp!

  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis corporis ullam ex iste! Voluptatem facere minima amet odio corrupti.';

  return (
    <>
      <div>
        <BtnLink onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          Назад к поиску
        </BtnLink>
      </div>
      <H1ExtraBold>{name}</H1ExtraBold>
      <Subtitle>
        <BodyP2>Артикул: {_id}</BodyP2>
        <Rating rating={3.5} />
        <BodyP2 $color='dark'>81 отзыв</BodyP2>
      </Subtitle>
      <MainWrapper>
        <ImgBlock>
          {!!discount && (
            <div className='abs'>
              <Tag color='red' size='m'>
                -{discount}%
              </Tag>
            </div>
          )}
          <div>
            <img src={picture} alt={name} />
          </div>
          <div>
            <>в корзину, доставка, гарантия</>
          </div>
        </ImgBlock>
        <Block>
          <H2ExtraBold>Описание</H2ExtraBold>
          <BodyP1>{description}</BodyP1>
        </Block>
        <Block>
          <H2ExtraBold>Характеристики</H2ExtraBold>
          <BodyP1>{lorem}</BodyP1>
        </Block>
        <Block>
          <H2ExtraBold>Отзывы</H2ExtraBold>
          <BodyP1>{lorem}</BodyP1>
        </Block>
      </MainWrapper>
    </>
  );
};

export default Product;
