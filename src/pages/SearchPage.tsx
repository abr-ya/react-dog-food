import { useContext, useEffect, useState } from 'react';
import { IProduct } from '../interfaces';
import FilterContext from '../context/FilterContext';
import { Card, NotFound } from '../components';
import { CardsWrapper } from '../components/Common.styled';
import ProductContext from '../context/ProductContext';
import { getProductsReguest } from '../api';
import { useAppSelector } from '../hooks/typedRedux';
import { RootStateType } from '../app/store';

const SearchPage = () => {
  const { key } = useContext(FilterContext);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const { data, setProducts } = useContext(ProductContext);
  const {
    user: { token },
  } = useAppSelector((state: RootStateType) => state.auth);

  if (data.length === 0 && token) {
    getProductsReguest(token)
      .then((res) => {
        console.log('login', res.data);
        setProducts(res.data.products);
      })
      .catch((e) => {
        console.log('Error: ', e.message);
      });
  }

  const filterByName = (products: IProduct[], text: string) =>
    products.filter((item) => item.name.toLowerCase().includes(text));

  useEffect(() => {
    if (data && data.length) setFilteredData(key ? filterByName(data, key) : data);
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
