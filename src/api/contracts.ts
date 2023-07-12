import { IProduct } from '../interfaces';
// import { AxiosResponse } from 'axios';
export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
}

export interface IProductReviewPayload {
  name?: string;
  city?: string;
  text: string;
  rating?: number;
}
