import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootStateType, AppDispatch } from "../app/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
