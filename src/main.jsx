import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Errorpage from './Pages/Errorpage';
import Homepage from './Pages/Homepage'
import Login  from './Pages/Login';
import Signup  from './Pages/Signup';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Errorpage />,
    children:
    [
      {
        path:'/',
        element:<Homepage />,
      },
    ]
  },
  {
    path:'/login',
    element:<Login intent="login" />,
    errorElement:<Errorpage />,
  },
  {
    path:'/forgot',
    element:<Login intent="newpass" />,
    errorElement:<Errorpage />,
  },
  {
    path:"/signup",
    element: <Signup />,
    errorElement: <Errorpage />,
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
);
