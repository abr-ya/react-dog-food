import { Routes, Route } from 'react-router-dom';
import './styles.css';
import MainLayout from '../layout/MainLayout';
import { Food, Home, NotFound, Product, SearchPage, User } from '../pages';
import { FilterProvider } from '../context/FilterContext';
import { UserProvider } from '../context/UserContext';
import { ProductProvider } from '../context/ProductContext';
import PrivateRoute from '../layout/PrivateRoute';

export const App = () => {
  return (
    <UserProvider>
      <FilterProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/search' element={<PrivateRoute />}>
                <Route path='/search' element={<SearchPage />} />
              </Route>
              <Route path='/user' element={<User />} />
              <Route path='/product' element={<Food />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </ProductProvider>
      </FilterProvider>
    </UserProvider>
  );
};
