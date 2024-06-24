import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UpdateCoffee from './UpdateCoffee.jsx';
import AddCoffee from './AddCoffee.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './Users.jsx';
import MainIndex from './MainIndex.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainIndex></MainIndex>,
    
    children:[
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>,
        
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=>fetch("http://localhost:5000/users")
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
      
      </AuthProvider>  </React.StrictMode>,
)
