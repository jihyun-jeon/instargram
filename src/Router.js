import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoginJiHyun from './pages/Login/Login';
import MainJiHyun from './pages/Main/Main';

const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LoginJiHyun />,
    },
    {
      path: 'main',
      element: <MainJiHyun />,
    },
  ],
  {
    basename: '/instargram',
  }
);

export default Router;
