import React from 'react';
import ReactDOM from 'react-dom';
import {
  createHashRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import SignUp from './components/SingUp/SingUp.jsx';
import OneItemDisplay from './components/itemsDisplay/OneItemDisplay.jsx';
import Login from './components/logIn/Login.jsx'
import UploadImg from './components/cloudD/UploadImg.jsx';
import Terms from './components/footer/terms.jsx';
import Privacy from './components/footer/priveacy.jsx';
import ContactUs from './components/footer/contactUs.jsx';
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
},{
  path:"/items/:itemId",
  element: <OneItemDisplay />
},
{
  path:"/ImgUpload",
  element: <UploadImg/>
},
{
path:"/terms",
element:<Terms/>,
},
{
path:"/privacy-policy",
element:<Privacy/>,
},
{
path:"contact-us",
element:<ContactUs/>,
}
])
ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('app'))