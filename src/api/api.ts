import axios from './axios';
import { IUserLoginPayload } from './contracts';

const baseUrl = 'https://api.react-learning.ru/';

export const LoginReguest = (payload: IUserLoginPayload) => {
  return axios.post(`${baseUrl}signin`, payload);
};

export const getProducts = () => {
  return axios.get(`${baseUrl}products`);
};

export const getProduct = (id: string) => {
  return axios.get(`${baseUrl}products/${id}`);
};
