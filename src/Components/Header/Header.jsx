import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="h-container">
      <div className="innerWidth h-wrapper flex">
        <Link to="/">
          <img src="../logo.png" alt="logo" className="logo" />{" "}
        </Link>
        <ul className="h-menu-items flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
