import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useContext(UserContext);

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
          <li>
            {isLoggedIn ? (
              <>
                <button className="logBtn" onClick={() => setIsLoggedIn(false)}>
                  Logout
                </button>
                <span>{user.name}</span>
              </>
            ) : (
              <button className="logBtn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
