import { useParams, useNavigate } from 'react-router-dom';
import { BodyP1, BodyP2, H1ExtraBold, H2ExtraBold } from '../components/Common.styled';
import { Block, ImgBlock, MainWrapper, Subtitle } from './Product.styled';
import { Rating, Tag } from '../atoms';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis corporis ullam ex iste! Voluptatem facere minima amet odio corrupti.';

  return (
    <>
      <div>Product {id}</div>
      <div>
        <button onClick={() => navigate(-1)}>Назад к поиску</button>
      </div>
      <H1ExtraBold>Бублик из бычьего корня</H1ExtraBold>
      <Subtitle>
        <BodyP2>Артикул: 2388907</BodyP2>
        <Rating rating={3.5} />
        <BodyP2 $color='dark'>81 отзыв</BodyP2>
      </Subtitle>
      <MainWrapper>
        <ImgBlock>
          <div className='abs'>
            <Tag color='red' size='m'>
              -10%
            </Tag>
          </div>
          <div>
            <img src='https://react-learning.ru/image-compressed/4.jpg' alt='alt-text' />
          </div>
          <div>
            <>в корзину, доставка, гарантия</>
          </div>
        </ImgBlock>
        <Block>
          <H2ExtraBold>Описание</H2ExtraBold>
          <BodyP1>
            Бублик из бычьего корня-забавная, интересная, вкусная, а главное полезная вкусняшка для вашего любимца.
            Неповторимый вкус этого лакомства надолго отвлечет Вашего питомца от любых дел.
          </BodyP1>
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
