import { IProductsResponse } from '../../api/contracts';
import { IProduct, IProductDetail, IProductInCart } from '../../interfaces';
import { IProductsListData } from './interfaces';

export const normalizeListResponse = (response: IProductsResponse): IProductsListData => {
  return response;
};

export const normalizeToCart = ({
  _id,
  discount,
  pictures,
  name,
  price,
  stock,
  wight,
}: IProduct | IProductDetail): IProductInCart => ({
  _id,
  value: 1,
  discount,
  name,
  pictures,
  price,
  realPrice: Math.round((price * (100 - discount)) / 100),
  stock,
  wight,
});
