import { useContext, useCallback, useState } from 'react';
import FilterContext from '../context/FilterContext';
import { Card, Loader, NotFound } from '../components';
import { CardsWrapper } from '../components/Common.styled';
import { productApi } from '../api/apiQuery';
import { LoadMore } from '../components/LoadMore/LoadMore';

const SearchPage = () => {
  const { key } = useContext(FilterContext);
  const [page, setPage] = useState(1);

  const { data, isFetching } = productApi.useGetAllQuery({ query: key, page, limit: 12 });

  const isEndOfList = data?.products && data?.products.length >= data.total;

  const loadMore = useCallback(() => {
    if (!isEndOfList) setPage((prev) => prev + 1);
  }, [isEndOfList]);

  if (isFetching && !data?.products) return <Loader />;

  const products = data?.products;
  if (!products || !Array.isArray(products)) return <>нет данных (или не массив)!</>; // todo

  return (
    <>
      <h1>{`По запросу "${key}" найдено ${data.total} товаров:`}</h1>
      {products.length === 0 ? (
        <NotFound />
      ) : (
        <CardsWrapper>
          {products.map((el) => (
            <Card key={el._id} {...el} />
          ))}
          {data && <LoadMore isLoading={isFetching} action={loadMore} isEndOfList={isEndOfList} />}
        </CardsWrapper>
      )}
    </>
  );
};

export default SearchPage;
