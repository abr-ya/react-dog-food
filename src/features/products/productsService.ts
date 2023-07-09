import { getProducts, getProduct } from '../../api';

export const getProductsReguest = async () => {
  const { data, status } = await getProducts();

  return { data, status };
};

export const getProductReguest = async (id: string) => {
  const { data, status } = await getProduct(id);

  return { data, status };
};
