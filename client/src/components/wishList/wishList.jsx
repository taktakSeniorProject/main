import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Timeline, Space, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
const wishList = () => {
  const [wishList, setWishList] = useState([]);

  const getWishList = (id) => {
    axios
      .get(`http://127.0.0.1:3000/api/wishList/${id}`)
      .then((result) => {
        setWishList(result.data);
      })
      .catch((err) => console.error(err));
  };

  const deleteItemFWL = (userId, itemId) => {
    axios
      .delete(`http://127.0.0.1:3000/api/wishList/${userId}/${itemId}`)
      .then((result) => {
        getWishList();
      })
      .catch((err) => console.error(err));
  };

  const deletAllItemFWL = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/wishList/${id}`)
      .then((result) => {
        getWishList();
      })
      .catch((err) => console.error(err));
  };

  const addItemTWL = (userId, itemId) => {
    axios
      .post(`http://127.0.0.1:3000/api/wishList/${userId}/${itemId}`)
      .then((result) => {
        setWishList("");
      })
      .catch((err) => console.error(err));
  };

  return <div></div>;
};

export default wishList;
