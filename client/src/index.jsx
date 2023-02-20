import React from "react";
import ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import SignUp from './components/SingUp/SingUp.jsx';
import OneItemDisplay from './components/itemsDisplay/OneItemDisplay.jsx';
import Login from "./components/logIn/Login.jsx";
import UploadImg from "./components/cloudD/UploadImg.jsx";
import UserIcon from "./components/userIcon/UserIcon.jsx";
import Changeinfo from "./change the info for the user/Changeinfo.jsx";
import ImagesUplead from "./components/userIcon/ImagesUplead.jsx";
import WishList from "./components/wishList/wishList.jsx";
import Congrats from "./components/wishList/congrats.jsx";
import Confirm from "./components/wishList/confirm.jsx";
import Terms from "./components/footer/terms.jsx";
import Privacy from "./components/footer/priveacy.jsx";
import ContactUs from "./components/footer/contactUs.jsx";
import ConfirmBuy from './components/wishList/confirmbyy.jsx'
const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/ImgUpload",
    element: <UploadImg />,
  },
  {
    path: "/ChangeUser",
    element: <UploadImg />,
  },
  {
    path: "/UserIcon",
    element: <UserIcon />,
  },
  {
    path: "/changeInfo/:id",
    element: <Changeinfo />,
  },
  {
    path: "/uploadImage/:id",
    element: <ImagesUplead />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/items/:itemId/:id",
    element: <OneItemDisplay />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "/wishList/:id",
    element: <WishList />,
  },
  {
    path: "/congrats",
    element: <Congrats />,
  },
  {
    path: "/confirm",
    element: <Confirm />,
  },
  {
    path: "/confirmbuy",
    element: <ConfirmBuy />,
  }
]);
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("app")
);
