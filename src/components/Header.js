import { Link } from "react-router-dom";

import "../styles/components/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logoContainer">
        <h3 className="header__logo">
          <span>R</span>esume<span>M</span>aker
        </h3>
      </div>

      <nav className="header__nav">
        <ul>
          <li className="header__navLink">
            <Link to="/">Home</Link>
          </li>

          <li className="header__navLink">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
