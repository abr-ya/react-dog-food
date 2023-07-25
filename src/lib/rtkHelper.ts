import { AnyAction } from '@reduxjs/toolkit';

export const typedCatchHandler = (
  error: any | unknown,
  callback: (message: string) => void,
  sliceName = 'NOsliceName'
) => {
  if (error?.name === 'AxiosError') {
    const message = error?.response?.data?.message;
    const status = error?.response?.status;
    console.log(`${sliceName} catch Axios error:`, status, message, error.message);

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return callback(`${status}_${message}_${error.message}`);
  }
  if (error instanceof Error) {
    console.log(`${sliceName} catch error:`, error.message);

    return callback(`-_-_${error.message}`);
  }
};

export const isError = (action: AnyAction) => action.type.endsWith('rejected');
