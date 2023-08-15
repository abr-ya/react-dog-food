import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../../hooks/typedRedux";
import { Btn, BodyP1, BodyP2, H1ExtraBold, H3ExtraBold } from "../../components/Common.styled";
import { ItemsWrapper, StyledCart, Right, Order, Delivery, Block } from "./Cart.styled";
import { updateCartItem, removeFromCart } from "../../features/products/cartSlice";
import Line from "./Line/Line";

const Cart = () => {
  const { count, data, total, withDiscount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const updateHandler = (id: string, value: number) => {
    dispatch(updateCartItem({ id, value }));
  };

  const errorHandler = (error: string) => {
    toast.error(`Не можем обновить: ${error}`);
  };

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <H1ExtraBold>Корзина</H1ExtraBold>
      <StyledCart>
        <ItemsWrapper>
          {data.map((el) => (
            <Line
              key={el._id}
              {...el}
              updateHandler={updateHandler}
              errorHandler={errorHandler}
              removeHandler={() => removeHandler(el._id)}
            />
          ))}
        </ItemsWrapper>
        <Right>
          <Order>
            <H3ExtraBold>Ваша корзина</H3ExtraBold>
            <Block>
              <BodyP2>товары ({count})</BodyP2>
              <BodyP2>{total} ₽</BodyP2>
            </Block>
            <Block>
              <BodyP2>скидка</BodyP2>
              <H3ExtraBold $isred={true}>- {total - withDiscount} ₽</H3ExtraBold>
            </Block>
            <Block>
              <BodyP2>общая стоимость</BodyP2>
              <H3ExtraBold>{withDiscount} ₽</H3ExtraBold>
            </Block>
            <Btn>Оформить заказ</Btn>
          </Order>
          <Delivery>
            <BodyP1 $weight={700}>Доставка по всему миру!</BodyP1>
            <BodyP2>Доставка курьером — от 399 ₽</BodyP2>
            <BodyP2>Доставка в пункт выдачи — от 199 ₽</BodyP2>
          </Delivery>
        </Right>
      </StyledCart>
    </>
  );
};

export default Cart;
