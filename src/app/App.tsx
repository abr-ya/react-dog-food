import { Routes, Route } from 'react-router-dom';
import './styles.css';
import MainLayout from '../layout/MainLayout';
import { Food, Home, NotFound, Product, SearchPage, User } from '../pages';
import { FilterProvider } from '../context/FilterContext';
import { UserProvider } from '../context/UserContext';

export const App = () => {
  return (
    <UserProvider>
      <FilterProvider>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<SearchPage />} />
            <Route path='home' element={<Home />} />
            <Route path='user' element={<User />} />
            <Route path='product' element={<Food />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </FilterProvider>
    </UserProvider>
  );
};
