import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../hooks/typedRedux';
import { Btn, BodyP1, BodyP2, H1ExtraBold, H3ExtraBold } from '../../components/Common.styled';
import { ItemsWrapper, StyledCart, Right, Order, Delivery } from './Cart.styled';
import { updateCartItem } from '../../features/products/cartSlice';
import Line from './Line/Line';

const Cart = () => {
  const { data } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const updateHandler = (id: string, value: number) => {
    dispatch(updateCartItem({ id, value }));
  };

  const errorHandler = (error: string) => {
    toast.error(`Не можем обновить: ${error}`);
  };

  const removeHandler = (id: string) => {
    console.log('remove', id);
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
            <p>товары</p>
            <p>скидка</p>
            <p>общая стоимость</p>
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
