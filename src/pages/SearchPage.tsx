import { useContext, useEffect, useState } from 'react';
import { IProduct } from '../interfaces';
import FilterContext from '../context/FilterContext';
import { Card, NotFound } from '../components';
import { CardsWrapper } from '../components/Common.styled';
import { useAppDispatch, useAppSelector } from '../hooks/typedRedux';
import { RootStateType } from '../app/store';
import { getProducts } from '../features/products/productsListSlice';

const SearchPage = () => {
  const { key } = useContext(FilterContext);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const { data } = useAppSelector((state: RootStateType) => state.products); // isLoading
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filterByName = (products: IProduct[], text: string) =>
    products.filter((item) => item.name.toLowerCase().includes(text));

  useEffect(() => {
    if (data && data.total) setFilteredData(key ? filterByName(data.products, key) : data.products);
  }, [data, key]);

  return (
    <>
      <h1>{`По запросу ${key} найдено ${filteredData.length} товаров`}</h1>
      {filteredData.length === 0 ? (
        <NotFound />
      ) : (
        <CardsWrapper>
          {filteredData.slice(0, 8).map((el) => (
            <Card key={el._id} {...el} />
          ))}
        </CardsWrapper>
      )}
    </>
  );
};

export default SearchPage;
