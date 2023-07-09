import { getProducts } from '../../api';

export const getProductsReguest = async () => {
  const { data, status } = await getProducts();

  return { data, status };
};
