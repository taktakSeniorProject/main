import React from "react";
import ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import SignUp from "./components/SingUp/SingUp.jsx";
import OneItemDisplay from "./components/itemsDisplay/OneItemDisplay.jsx";
import Login from "./components/logIn/Login.jsx";
import UploadImg from "./components/cloudD/UploadImg.jsx";
import UserIcon from "./components/userIcon/UserIcon.jsx";
import Changeinfo from "./change the info for the user/Changeinfo.jsx";
import ImagesUplead from "./components/userIcon/ImagesUplead.jsx";
import WishList from "./components/wishList/wishList.jsx";
import Congrats from "./components/wishList/congrats.jsx";
import Confirm from "antd/es/modal/confirm.js";
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
    path: "/items/:itemId",
    element: <OneItemDisplay />,
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
]);
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("app")
);
