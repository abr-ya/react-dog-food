import { Routes, Route } from 'react-router-dom';
import './styles.css';
import MainLayout from '../layout/MainLayout';
import { Food, Home, NotFound, SearchPage } from '../pages';
import { FilterProvider } from '../context/FilterContext';

export const App = () => {
  return (
    <FilterProvider>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='food' element={<Food />} />
          <Route path='/' element={<SearchPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </FilterProvider>
  );
};
