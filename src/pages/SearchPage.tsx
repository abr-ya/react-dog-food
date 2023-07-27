import { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import { Card, Loader, NotFound } from '../components';
import { CardsWrapper } from '../components/Common.styled';
import { productApi } from '../api/apiQuery';

const SearchPage = () => {
  const { key } = useContext(FilterContext);

  const {
    data: { products },
    isFetching,
  } = productApi.useGetAllQuery({ query: key, page: 1, limit: 12 });

  if (isFetching) return <Loader />;

  if (!products || !Array.isArray(products)) return <>нет данных (или не массив)!</>; // todo

  return (
    <>
      <h1>{`По запросу "${key}" найдено ${products.length} товаров:`}</h1>
      {products.length === 0 ? (
        <NotFound />
      ) : (
        <CardsWrapper>
          {products.slice(0, 8).map((el) => (
            <Card key={el._id} {...el} />
          ))}
        </CardsWrapper>
      )}
    </>
  );
};

export default SearchPage;
