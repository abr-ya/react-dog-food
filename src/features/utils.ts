import { AnyAction } from '@reduxjs/toolkit';

export const typedCatchHandler = (
  error: any | unknown,
  callback: (message: string) => void,
  sliceName = 'NOsliceName'
) => {
  if (error?.name === 'AxiosError') {
    const message = error?.response?.data?.message;
    console.log(`${sliceName} catch Axios error:`, message);

    return callback(message);
  }
  if (error instanceof Error) {
    console.log(`${sliceName} catch error:`, error.message);

    return callback(error.message);
  }
};

export const isError = (action: AnyAction) => action.type.endsWith('rejected');

export const not200mes = 'Axios получил результат, но статус не 200.';
export const not201mes = 'Axios получил результат, но статус не 201.';

export const createConfig = (token) => ({ headers: { Authorization: `Bearer ${token}` } });
export const getMessage = (e) =>
  (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
