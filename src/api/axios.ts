import axios from 'axios';
import { getToken } from './tokenHelper';

axios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (config) => {
    const token = getToken();
    if (!token) return config;

    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: token,
      },
    };
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    // saveToken in features/user/authService.ts now
    // if (response.config.url?.includes('authorize') && 'access_token' in response.data)

    const statusCode = response.status;
    if (statusCode === 260) {
      const message = response.data?.message;
      if (typeof message === 'string') {
        console.log(message);
        // Notification.success(message, { autoClose: 5000 });
      } else {
        console.log(`Ожидали message строкой, а получили ${typeof message}`);
      }
    }

    return response;
  },
  (err) => {
    // Any HTTP Code which is not 2xx will be considered as error
    const statusCode = err.response.status;
    if (statusCode === 403) {
      console.log(403);
      // store.dispatch(clearAdmin());
      // напрашивалась чистка токена здесь, но тогда при проверке закинем на пустой серый экран
    }

    throw err;
  }
);

export default axios;
