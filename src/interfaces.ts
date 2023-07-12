import { IUser } from './api/contracts';

interface IReview {
  _id: string;
  rating: number;
  text: string;
  product: string;
  created_at: string;
  updated_at: string;
}

interface IProductBase {
  _id: string;
  available: boolean;
  description: string;
  discount: number;
  name: string;
  pictures: string;
  price: number;
  stock: number;
  wight: string;
}

export interface IProduct extends IProductBase {
  isFavorite: boolean;
  isCart: boolean;
}

export interface IProductDetail extends IProductBase {
  author: IUser;
  created_at: string;
  isPublished: boolean;
  likes: string[];
  reviews: IReview[];
  tags: string[];
  updated_at: string;
}
