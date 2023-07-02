import { useContext, useEffect, useState } from 'react';
import axios, { isCancel } from 'axios';
import { IProduct } from '../interfaces';
import FilterContext from '../context/FilterContext';
import { Card } from '../components';
import { CardsWrapper } from '../components/Common.styled';

const SearchPage = () => {
  const { key } = useContext(FilterContext);

  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);

  useEffect(() => {
    const apiUrl =
      'https://file.notion.so/f/s/42dd248d-d945-4741-a6b5-842b764e855c/data.json?id=24fe6e14-d381-422e-b708-2d318dec345b&table=block&spaceId=05a92a5a-0287-4665-b482-76386649fce0&expirationTimestamp=1688313600000&signature=rLdu3Ure2ENTYRMxQnbXaG9jz2X8JamOeb6gz-ByYdw';
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(apiUrl, { cancelToken: cancelTokenSource.token })
      .then((res) => setData(res.data))
      .catch((e) => {
        if (isCancel(e)) {
          console.log('Request canceled, error message: ', e.message);
        } else {
          console.log('Error: ', e.message);
        }
      });

    return () => {
      cancelTokenSource.cancel('Cancel in useEffect Cleaner.');
    };
  }, []);

  const filterByName = (products: IProduct[], text: string) =>
    products.filter((item) => item.name.toLowerCase().includes(text));

  useEffect(() => {
    if (data && data.length) setFilteredData(key ? filterByName(data, key) : data);
  }, [data, key]);

  return (
    <>
      <h1>React Typescript Webpack</h1>
      <h2>{`Получено ${data.length} товаров, фильтруем по: "${key}"`}</h2>
      <CardsWrapper>
        {filteredData.map((el) => (
          <Card key={el.picture} {...el} />
        ))}
      </CardsWrapper>
    </>
  );
};

export default SearchPage;
