import { useCallback, useState } from 'react';
import { Card, Loader, NotFound } from '../components';
import { CardsWrapper } from '../components/Common.styled';
import { productApi } from '../api/apiQuery';
import { LoadMore } from '../components/LoadMore/LoadMore';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [sParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = sParams.get('q') || '';
  const { data, isFetching } = productApi.useGetAllQuery({ query, page, limit: 12 });

  const isEndOfList = data?.products && data?.products.length >= data.total;

  const loadMore = useCallback(() => {
    if (!isEndOfList) setPage((prev) => prev + 1);
  }, [isEndOfList]);

  if (isFetching && !data?.products) return <Loader />;

  const products = data?.products;
  if (!products || !Array.isArray(products)) return <>нет данных (или не массив)!</>; // todo

  return (
    <>
      <h1>{`По запросу "${query}" найдено ${data.total} товаров:`}</h1>
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
