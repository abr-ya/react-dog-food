import { AnyAction } from "@reduxjs/toolkit";

export const isError = (action: AnyAction) => action.type.endsWith("rejected");

export const getMessage = (e: any) =>
  (e.response && e.response.data && e.response.data.message) || e.message || e.toString();
