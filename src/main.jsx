import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root';
import ErrorElement from './components/ErrorElement';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import UserDetails from './pages/UserDetails';
import SuccessPage from './pages/SuccessPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
       index: true,
        element: <Home />
      },
      {
        path:'/reserve',
        element: <Reserve />,
        errorElement: <ErrorElement />,
      },{
        path:'/user-details',
        element:<UserDetails />
      },
      {
        path:'/success',
        element: <SuccessPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
