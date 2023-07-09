// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosResponse } from 'axios';
import { IUserLoginPayload } from './contracts';

const baseUrl = 'https://api.react-learning.ru/';

export const LoginReguest = (payload: IUserLoginPayload) => {
  return axios.post(`${baseUrl}signin`, payload);
};

const createOptions = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProductsReguest = async (token: string) => {
  const { data, status } = await axios.get(`${baseUrl}products`, createOptions(token));

  return { data, status };
};

export const getProductReguest = async (token: string, id: string) => {
  let response: AxiosResponse;
  let status: number;

  try {
    response = await axios.get(`${baseUrl}users/${id}`, createOptions(token));
    status = response?.status;
  } catch (err) {
    console.log(err);
    // @ts-ignore
    status = err.response?.status;
  }

  // @ts-ignore
  return { data: response?.data, status };
};
