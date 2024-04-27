import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root';
import Home from './Components/Home';
import ErrorPage from './Components/error-page';
import './index.css'
import AuthProvider from './Components/AuthProvider';
import Login from './Components/Login';
import Registration from './Components/Registration';
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
 import "./index.css"; 
  
 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  errorElement: <ErrorPage />,
  children: [
    { path: "/",
      element: <Home></Home>
    },
    { path: "/Login",
      element: <Login></Login>
    },
    { path: "/Registration",
      element: <Registration></Registration>
    },
  ]
  }, 
 ]); 
  
 ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode> 
  <AuthProvider>
      <RouterProvider router={router} /> 
  </AuthProvider>
  </React.StrictMode> 
 ); 