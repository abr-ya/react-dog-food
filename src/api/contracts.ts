import { IProduct } from "../interfaces";
// import { AxiosResponse } from 'axios';
export interface IUserCreatePayload {
  email: string;
  group: string;
  password: string;
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  data: {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    email: string;
    group: string;
  };
  token: string;
}

export interface IProductsSearchParams {
  limit: number;
  page: number;
  query: string;
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
