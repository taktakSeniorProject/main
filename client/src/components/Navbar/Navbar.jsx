import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { Link, useParams } from "react-router-dom";
import { Button } from "antd";
import UserIcon from "../userIcon/UserIcon.jsx";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const [userHere, setUserhere] = useState(true);
  const linksRef = useRef(null);
  const { id } = useParams();
  useEffect(() => {
    if (localStorage.length === 0) {
      setUserhere(false);
    } else {
      setUserhere(true);
    }
  }, [localStorage.length]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={`/wishList/${id}`}>wishList</Link>
          <img
            src="https://cdn.discordapp.com/attachments/1076149444199845970/1076149553142698034/logo-black.png"
            className="logo"
            alt="logo"
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
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
          <img
            src="https://media.tenor.com/OXua4v7_uSkAAAAC/profile-picture.gif"
            className="profilepic"
            onClick={() => {}}
          />
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
