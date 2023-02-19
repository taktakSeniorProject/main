import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";

const congrats = () => {
  return (
    <div className="congrats-confirm">
      <img
        className="ok"
        src="https://toppng.com/uploads/preview/hd-green-round-tick-check-mark-vector-icon-11641942001dzorrl7w7j.png"
        alt=""
      />
      <h3>Congratulation!</h3>
      <Link to="/">
        <Button className="out" type="primary">
          continue
        </Button>
      </Link>
    </div>
  );
};

export default congrats;
