import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root';
import Home from './Components/Home';
import ErrorPage from './Components/error-page';
import './index.css'
import AuthProvider from './Components/AuthProvider';
import Login from './Components/Login';
import Registration from './Components/Registration';
import AddItem from './Components/AddItem';
import AllItems from './Components/AllItems';
import Details from './Components/Details';
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
    { path: "/AddItem",
      element: <AddItem></AddItem>
    },
    { path: "/AllItems",
      element: <AllItems></AllItems>,
      loader: () => fetch('http://localhost:5000/items')
    },
    { path: "/Details/:id",
      element: <Details></Details>,
      loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
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