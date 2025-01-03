import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link z react-router-dom
import "../Menu.css";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State pro viditelnost menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>
      <div id="menu" className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
        <li><Link to="/">Homepage</Link></li>
          <li><Link to="/about-me">O mně</Link></li>
          <li><Link to="/alkohol">Alkohol</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          {/* <li><Link to="/top-drinks">Top Drinks</Link></li>
          <li><Link to="/rum">Rum</Link></li>
          <li><Link to="/vodka">Vodka</Link></li>
          <li><Link to="/gin">Gin</Link></li>
          <li><Link to="/other">Other</Link></li>
          <li><Link to="/non-alcoholic">Non-Alcoholic</Link></li> */}
        </ul>
      </div>
    </>
  );
}
