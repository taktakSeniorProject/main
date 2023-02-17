import React from 'react';
import  ReactDOM  from 'react-dom';
import SignUp from './components/SingUp/SingUp.jsx'
import HomePage from './components/HomePage/HomePage.jsx';

import Login from './components/Login/Login.jsx'
import {
  createHashRouter,
  RouterProvider,

} from "react-router-dom";
const router=createHashRouter([{
  path:'/',
  element:<HomePage/>
  },
  { 
    path:"/SignUp",
    element:<SignUp/>
},
{
  path:"/Login",
  element:<Login/>
}
])
ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('app'))
