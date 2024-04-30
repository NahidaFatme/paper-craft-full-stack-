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
import MyList from './Components/MyList';
import UpdateItem from './Components/UpdateItem';
import PrivateRoute from './Components/PrivateRoute';
import Banner from './Components/Banner';
import SelectedCategory from './Components/SelectedCategory';
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
      element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
    },
    { path: "/AllItems",
      element: <AllItems></AllItems>,
      loader: () => fetch('https://paper-craft-server.vercel.app/items')
    },
    { path: "/Details/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader: ({params}) => fetch(`https://paper-craft-server.vercel.app/items/id/${params.id}`)
    },
    { path: "/MyList/:email",
      element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      loader: ({params}) => fetch(`https://paper-craft-server.vercel.app/items/email/${params.email}`)
    },
    { path: "/Update/:id",
      element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
      loader: ({params}) => fetch(`https://paper-craft-server.vercel.app/items/id/${params.id}`)
    },
    { path: "/SelectedCategory/:name",
      element: <SelectedCategory></SelectedCategory>,
      loader: ({params}) => fetch(`https://paper-craft-server.vercel.app/items/category/${params.name}`)
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