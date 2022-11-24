import React from 'react';
import Router from './Router';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './styles/reset.scss';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
);
