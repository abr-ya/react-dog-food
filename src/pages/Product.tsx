import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/typedRedux";
import {
  BodyP1,
  BodyP2,
  Btn,
  BtnLink,
  H1ExtraBold,
  H2ExtraBold,
  H3ExtraBold,
  OldPrice,
} from "../components/Common.styled";
import { Loader, NotFound, ReviewForm, NumberInput } from "../components";
import { Block, GrayBlock, ImgBlock, MainWrapper, Subtitle } from "./Product.styled";
import { Rating, Tag } from "../atoms";
import { getProduct, setLike, addReview } from "../features/products/productSlice";
import { ArrowLeftIcon, SmallLikeIcon, SmallRedLikeIcon } from "../components/icons";
import { writeCorrect } from "../utils";
import { IReviewFormData } from "../components/ReviewForm/interfaces";
import { addToCart, updateCartItem } from "../features/products/cartSlice";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useAppSelector((state) => state.productDetail);
  const { data: cartData } = useAppSelector((state) => state.cart);
  const { _id: userId } = useAppSelector((state) => state.auth.user.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [id]);

  if (isLoading) return <Loader />;
  if (data === null || !id) return <NotFound />; // todo: гибкий текст!

  const { description, discount, likes, name, pictures, price, reviews, stock } = data;

  const picture = Array.isArray(pictures) ? pictures[0] : pictures; // todo temp!

  const hasMyLike = likes.includes(userId);

  const isSale = discount > 0;
  const realPrice: number = Math.round((price * (100 - discount)) / 100);

  const rating = reviews.reduce((acc, el) => acc + el.rating, 0) / reviews.length;

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis corporis ullam ex iste! Voluptatem facere minima amet odio corrupti.";

  const likeHandler = () => {
    if (id) dispatch(setLike({ id, like: !hasMyLike }));
  };

  const reviewSubmitHandler = (payload: IReviewFormData) => {
    if (id) dispatch(addReview({ id, payload }));
  };

  const toCartHandler = () => {
    dispatch(addToCart(data));
  };

  const itemInCart = cartData.find((el) => el._id === id);
  const nowInCart = itemInCart?.value || 0;

  const updateHandler = (value: number) => {
    dispatch(updateCartItem({ id, value }));
  };

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
        <BodyP2>Артикул: {id}</BodyP2>
        <Rating rating={rating} />
        <BodyP2 $color="dark">
          {reviews.length} {writeCorrect(reviews.length, ["отзыв", "отзыва", "отзывов"])}
        </BodyP2>
      </Subtitle>
      <MainWrapper>
        <ImgBlock>
          {!!discount && (
            <div className="abs">
              <Tag color="red" size="m">
                -{discount}%
              </Tag>
            </div>
          )}
          <div>
            <img src={picture} alt={name} />
          </div>
          <div>
            <OldPrice>{isSale ? `${price} ₽` : ""}</OldPrice>
            <H3ExtraBold $isred={isSale}>{realPrice} ₽</H3ExtraBold>
            {nowInCart ? (
              <NumberInput value={nowInCart} saveHandler={updateHandler} max={stock} />
            ) : (
              <Btn onClick={toCartHandler} disabled={!stock}>
                В корзину
              </Btn>
            )}
            <BtnLink onClick={likeHandler}>
              {hasMyLike ? <SmallRedLikeIcon /> : <SmallLikeIcon />}
              {hasMyLike ? "Разлайкать!" : "В избрранное"}
            </BtnLink>
            <GrayBlock>доставка</GrayBlock>
            <GrayBlock>гарантия</GrayBlock>
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
        <Block>
          <H2ExtraBold>Написать отзыв</H2ExtraBold>
          <ReviewForm onFormSubmit={reviewSubmitHandler} />
        </Block>
      </MainWrapper>
    </>
  );
};

export default Product;
