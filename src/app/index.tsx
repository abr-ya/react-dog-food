import { Routes, Route } from 'react-router-dom';
import './styles.css';
import MainLayout from '../layout/MainLayout';
import { Food, Home, Search } from '../pages';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='home' element={<Home />} />
        <Route path='food' element={<Food />} />
        <Route path='/' element={<Search />} />
        {/* <Route path='*' element={<Notfoundpage />} /> */}
      </Route>
    </Routes>
  );
};
