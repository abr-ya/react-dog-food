import { addReview, getProducts, getProduct, setProductLike } from '../../api';
import { IProductReviewPayload } from '../../api/contracts';

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

export const addReviewReguest = async (id: string, payload: IProductReviewPayload) => {
  const { data, status } = await addReview(id, payload);

  return { data, status };
};
