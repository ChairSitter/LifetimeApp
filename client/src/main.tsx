import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

import Daily from './pages/DayView/index.tsx';
import Calendar from './pages/CalendarView/index.tsx';
import Lifetime from './pages/LifetimeView/index.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <React.StrictMode>
      <ChakraProvider disableGlobalStyle={true} resetCSS={false}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      {
        path: '/daily',
        element: <Daily />,
      },
      {
        path: '/lifetime',
        element: <Lifetime />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
