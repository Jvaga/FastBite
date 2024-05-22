import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = () => {
  const [showDopdown, setShowDropdown] = useState(true);

  return (
    <div className="dropdown">
      <ul className={showDopdown ? "dropdown__show" : "dropdown__content"}>
        <li onClick={() => setShowDropdown(false)}>
          <NavLink to="pizza" onClick={() => window.scrollTo(0, 0)}>
            <span>Pizza</span>
          </NavLink>
        </li>

        <li onClick={() => setShowDropdown(false)}>
          <NavLink to="hamburger" onClick={() => window.scrollTo(0, 0)}>
            <span>Burgers</span>
          </NavLink>
        </li>

        <li onClick={() => setShowDropdown(false)}>
          <NavLink to="drink" onClick={() => window.scrollTo(0, 0)}>
            <span>Drinks</span>
          </NavLink>
        </li>
        <li onClick={() => setShowDropdown(false)}>
          <NavLink to="hotdog" onClick={() => window.scrollTo(0, 0)}>
            <span>Hotdogs</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
