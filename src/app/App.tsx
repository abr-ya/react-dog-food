import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../layout/MainLayout';
import { Food, Home, Error404, Product, SearchPage, Todo, User, Register } from '../pages';
import PrivateRoute from '../layout/PrivateRoute';
import './styles.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/search' element={<PrivateRoute />}>
        <Route path='/search' element={<SearchPage />} />
      </Route>
      <Route path='/user' element={<User />} />
      <Route path='/user/new' element={<Register />} />
      <Route path='/product' element={<Food />} />
      <Route path='/todo' element={<Todo />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  )
);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};
