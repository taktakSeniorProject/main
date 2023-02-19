import React from "react";
import { Link } from "react-router-dom";

import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div>
        <Link className="footer-link" to="/terms">Terms & Conditions</Link>
      </div>
      <div>
        <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
      </div>
      <div>
        <Link className="footer-link" to="/contact-us">Contact Us</Link>
      </div>
      <div>
        <a className="footer-icon" href="https://twitter.com/your-twitter-account">
        <FaTwitter />  
        </a>
        <a className="footer-icon" href="https://www.facebook.com/your-facebook-account">
        <FaFacebook />
        </a>
        <a className="footer-icon" href="https://www.instagram.com/your-instagram-account"> 
        <FaInstagram />
        </a>
      </div>    
    </footer>
  );
}

export default Footer;
