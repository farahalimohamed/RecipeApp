import React from "react";
import "./Footer.css";
import Logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-header">
          <Link to="/#" className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
            <span className="title">Recipe</span>
          </Link>
        </div>
        <hr />
        <span className="footer-text">
          © 2025 <Link href="#">Recipe™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
