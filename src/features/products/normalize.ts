import { IProductsResponse } from '../../api/contracts';
import { IProductsListData } from './interfaces';

export const normalizeListResponse = (response: IProductsResponse): IProductsListData => {
  return response;
};
