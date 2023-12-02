import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import Swap from './routes/swap';
import Liquidity from './routes/liquidity.jsx';
import AddLiquidity from './routes/add.jsx';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'swap',
        element: <Swap />,
      },
      {
        path: 'liquidity',
        element: <Liquidity />,
      },
      {
        path: 'add',
        element: <AddLiquidity />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
