import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <div>Product {id}</div>
      <div>
        <Link to='/search'>Назад к поиску</Link>
      </div>
    </>
  );
};

export default Product;
