import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.jsx";
import SignUp from "./components/SingUp/SingUp.jsx";
import OneItemDisplay from "./components/itemsDisplay/OneItemDisplay.jsx";
import Login from "./components/logIn/Login.jsx";
import WishList from "./components/wishList/wishList.jsx";
import Confirm from "./components/wishList/confirm.jsx";
import Congrats from "./components/wishList/congrats.jsx";
import UploadImg from "./components/cloudD/UploadImg.jsx";

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
    path: "/wishList/:id",
    element: <WishList />,
  },
  {
    path: "/confirm",
    element: <Confirm />,
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
    path: "/congrats",
    element: <Congrats />,
  },
]);
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("app")
);
