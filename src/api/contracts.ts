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
