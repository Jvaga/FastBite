import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "/logo.png";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(showNav);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li
              className="navbar__link-wrapper"
              onClick={() => setShowNav(false)}
              onMouseEnter={() => setShowDropdown(false)}
            >
              <NavLink
                className="navbar__link"
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </NavLink>
            </li>
            <li
              className="navbar__link-wrapper  navbar__dropdown"
              onClick={() => setShowNav(false)}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavLink
                className="navbar__link"
                to="menu"
                onClick={() => window.scrollTo(0, 0)}
              >
                Menú
              </NavLink>
            </li>
            {showDropdown && <Dropdown />}
          </ul>
        </div>

        <div
          className={`navbar__menu ${showNav ? "bg-color" : ""}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars className="navbar__menu-burger" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
