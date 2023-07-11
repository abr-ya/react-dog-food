import { getProducts, getProduct, setProductLike } from '../../api';

export const getProductsReguest = async () => {
  const { data, status } = await getProducts();

  return { data, status };
};

export const getProductReguest = async (id: string) => {
  const { data, status } = await getProduct(id);

  return { data, status };
};

export const setProductLikeReguest = async (id: string, like = true) => {
  const { data, status } = await setProductLike(id, like);

  return { data, status };
};
