import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenHelper";
import { baseUrl } from "./api";
import { IUser, IUserCreatePayload, IUserLoginPayload, IProductsResponse, IProductsSearchParams } from "./contracts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) headers.set("authorization", token);

      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    newUser: builder.mutation<IUser, IUserCreatePayload>({
      query(body) {
        return {
          url: "signup",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation<IUser, IUserLoginPayload>({
      query(body) {
        return {
          url: "signin",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) headers.set("authorization", token);

      return headers;
    },
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAll: builder.query<IProductsResponse, IProductsSearchParams>({
      query: ({ query, page, limit }) => ({
        url: "/products",
        params: {
          page,
          // Для проекта с постами мы жестко зафиксировали, что одна
          // страница — это 12 элементов. Сделано это на основе макета и
          // здравой логики
          limit,
          query,
        },
      }),
      serializeQueryArgs: ({ endpointName, queryArgs: { query } }) => {
        return endpointName + query;
      },
      // Полученные данные мы должны объединить с предыдущими данными в кэше
      merge: (currentCache, newValue, { arg: { page } }) => {
        if (page === 1) return;
        currentCache.products.push(...newValue.products);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});
