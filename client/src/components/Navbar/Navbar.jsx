import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";

import UserIcon from "../userIcon/UserIcon.jsx";
const Navbar = ({ user }) => {
  console.log(user, "from nav bar");

  const [showLinks, setShowLinks] = useState(false);
  const [userHere, setUserhere] = useState(true);
  const [navig, setnavig] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (localStorage.length === 0) {
      setUserhere(false);
    } else {
      setUserhere(true);
    }
  }, [localStorage.length]);
  const navi = () => {
    navigate("/UserIcon", {
      state: {
        user: user[0],
      },
    });
  };
 
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={`/wishList/${user[0] ? user[0].user_id : undefined}`}>
            wishList
          </Link>
          <img
            src="https://cdn.discordapp.com/attachments/1076149444199845970/1076149553142698034/logo-black.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div
          className="links-container"
        >
          
        </div>

        {!userHere && (
          <>
            {" "}
            <Link to="/SignUp">
              <Button onClick={() => {}}>SignUp</Button>
            </Link>
            <Link to="/Login">
              <Button onClick={() => {}}>Log In</Button>
            </Link>
          </>
        )}
        {userHere && (
          <>
            <h3>{user[0] ? user[0].username : "user"}</h3>
            <img
              src={
                user[0]
                  ? user[0].profile
                  : "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
              }
              className="profilepic"
              onClick={() => {
                navi();
              }}
            />
          </>
        )}
        <Link to="/Login">
          <Button
            onClick={() => {
              localStorage.removeItem("user");
            }}
          >
            LogOut
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
