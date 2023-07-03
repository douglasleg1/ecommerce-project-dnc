import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import Products from './views/Products/Products';
import Checkout from './views/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/products/:productsId',
    element: <Products/>,
  },
  {
    path: '/checkout/:checkoutId',
    element: <Checkout/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
