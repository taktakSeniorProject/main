import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";

const wishList = () => {
  const [wishList, setWishList] = useState([]);
  const itemsLength = wishList.length;

  useEffect(() => getWishList(), []);

  const getWishList = (id) => {
    axios
      .get(`http://127.0.0.1:3000/api/wishList/7`)
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

  return (
    <div>
      {/* <h1>welcome{JSON.parse(localStorage.getItem(user.username))}</h1> */}
      <ul>
        <li> {itemsLength}</li>
        <li>
          <ShoppingCartOutlined />
        </li>
      </ul>
      {wishList.map((element, index) => {
        console.log(element);
        return (
          <div key={index}>
            <img src={element.img} alt="" />
            <h1>{element.title}</h1>
            <h2>{element.price}</h2>
            <h3>{element.description}</h3>
            <Button type="primary" onClick={() => deleteItemFWL(7, element.id)}>
              <DeleteOutlined />
            </Button>
          </div>
        );
      })}
      <Button type="primary" onClick={() => deletAllItemFWL(7)}>
        <DeleteOutlined />
      </Button>
      <Link to="/confirm">
        <Button type="primary">Confirm</Button>
      </Link>
    </div>
  );
};

export default wishList;
