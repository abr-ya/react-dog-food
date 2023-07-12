import axios from './axios';
import { IProductReviewPayload, IUserLoginPayload } from './contracts';

export const baseUrl = 'https://api.react-learning.ru/';

export const LoginReguest = (payload: IUserLoginPayload) => {
  return axios.post(`${baseUrl}signin`, payload);
};

export const getProducts = () => {
  return axios.get(`${baseUrl}products`);
};

export const getProduct = (id: string) => {
  return axios.get(`${baseUrl}products/${id}`);
};

export const setProductLike = (id: string, isLike = true) =>
  axios.request({
    method: isLike ? 'PUT' : 'DELETE',
    url: `${baseUrl}products/likes/${id}`,
  });

export const addReview = (id: string, data: IProductReviewPayload) =>
  axios.request({
    data,
    method: 'POST',
    url: `${baseUrl}products/review/${id}`,
  });
