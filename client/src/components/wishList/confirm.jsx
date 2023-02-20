import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
const confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div className="congrats-confirm">
      <h3 className="zz">Are you sure you want to buy this item !</h3>

      <Button
        style={{ backgroundColor: "green" }}
        onClick={() => navigate("/congrats")}
      >
        <CheckOutlined style={{ color: "white" }} />
      </Button>

      <Button
        style={{ backgroundColor: "red" }}
        onClick={() => navigate(`/wishList/${location.state.id}`)}
      >
        <CloseOutlined style={{ color: "white" }} />
      </Button>
    </div>
  );
};

export default confirm;
