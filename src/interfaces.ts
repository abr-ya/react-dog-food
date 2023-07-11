export interface IProduct {
  _id: string;
  name: string;
  price: number;
  discount: number;
  wight: string;
  description: string;
  isFavorite: boolean;
  isCart: boolean;
  available: boolean;
  stock: number;
  pictures: string;
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
