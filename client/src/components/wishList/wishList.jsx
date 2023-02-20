import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";

const wishList = () => {
  const [wishList, setWishList] = useState([]);
  const itemsLength = wishList.length;
  const { id } = useParams();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    wishList.forEach((item) => {
      totalPrice += Number(item.price);
    });
    return totalPrice;
  };

  useEffect(() => getWishList(id), []);

  const getWishList = (id) => {
    axios
      .get(`http://127.0.0.1:3000/api/wishList/${id}`)
      .then((result) => {
        console.log(result);
        setWishList(result.data);
      })
      .catch((err) => console.error(err));
  };

  const deleteItemFWL = (userId, itemId) => {
    axios
      .delete(`http://127.0.0.1:3000/api/wishList/${userId}/${itemId}`)
      .then((result) => {
        getWishList(id);
      })
      .catch((err) => console.error(err));
  };

  const deletAllItemFWL = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/wishList/${id}`)
      .then((result) => {
        getWishList(id);
      })
      .catch((err) => console.error(err));
  };

  // const addItemTWL = (userId, itemId) => {
  //   axios
  //     .post(`http://127.0.0.1:3000/api/wishList/${userId}/${itemId}`)
  //     .then((result) => {
  //       setWishList("");
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <div>
      <div className="container">
        <div className="left-items">
          <ul className="list">
            <li className="number">
              {" "}
              <span className="red">{itemsLength}</span>
            </li>
            <li>
              <ShoppingCartOutlined className="cart" />
            </li>
          </ul>
        </div>
        <div className="right-items">
          <ul className="list">
            <li>
              <div className="total">Total price: ${calculateTotalPrice()}</div>
            </li>
            <li>
              <button
                type="button"
                className="delete-button"
                onClick={() => deletAllItemFWL(id)}
              >
                <DeleteOutlined className="fas fa-trash-alt" />
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/confirm", { state: { id: id } })}
                type="button"
                className="confirm-button"
              >
                Confirm
              </button>
            </li>
          </ul>
        </div>
        <hr className="line"></hr>
      </div>

      <div className="wishlist">
        {wishList.map((element, index) => {
          console.log(element);
          return (
            <div key={index} className="wishlist-item">
              <img src={element.img[0]} alt="" className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h2 className="wishlist-item-title">{element.title}</h2>
                <p className="wishlist-item-description">
                  {element.description}
                </p>
                <p className="wishlist-item-price">{element.price}</p>
              </div>
              <Button
                styletype="primary"
                onClick={() => deleteItemFWL(id, element.id)}
                className="wishlist-item-delete-button"
              >
                <DeleteOutlined />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default wishList;
