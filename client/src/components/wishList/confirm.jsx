import React from "react";

const confirm = () => {
  return (
    <div>
      <h1>Are you sure you wanna buy this item !</h1>
      <Link to="congrats">
        <Button>
          <CheckOutlined />
        </Button>
      </Link>
      <Link to="homePage">
        <Button>
          <CloseOutlined />
        </Button>
      </Link>
    </div>
  );
};

export default confirm;
