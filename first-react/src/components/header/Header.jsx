import React from "react";
import { FaHome } from "react-icons/fa";
import "./header.css"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us </a></li>
                <li><a href="">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <FaHome />
    </header>
  );
}

export default Header;
