import { createContext, FC, ReactNode, useReducer } from 'react';
import { IProduct } from '../interfaces';

const initialState: { data: IProduct[] } = { data: [] };

// Reducer mb separate File!
// todo interface for reducer!
const userReducer = (state: { data: IProduct[] }, action: any) => {
  switch (action.type) {
    case 'SET_PROD_LIST':
      return { data: action.payload };
    case 'RESET_PROD_LIST':
      return initialState;
    default:
      return state;
  }
};
// Reducer mb separate File!

type ProductContextType = ReturnType<typeof ProductManager>;

const initialContext = {
  ...initialState,
  setProducts: () => false,
  resetProducts: () => false,
};
const ProductContext = createContext<ProductContextType>(initialContext);

interface IProductManagerResult {
  data: IProduct[];
  setProduct: (products: IProduct[]) => void;
  resetProduct: () => void;
}

const ProductManager = (): IProductManagerResult => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Set an Product
  const setProducts = (products: IProduct[]) => {
    console.log('setProducts', products);
    dispatch({
      type: 'SET_PROD_LIST',
      payload: products,
    });
  };

  const resetProducts = () => {
    dispatch({ type: 'RESET_PROD_LIST' });
  };

  return { ...state, setProducts, resetProducts };
};

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ProductContext.Provider value={ProductManager()}>{children}</ProductContext.Provider>
);

export default ProductContext;
