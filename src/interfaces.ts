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
  reviews: any; // todo!
  tags: string[];
  updated_at: string;
}
