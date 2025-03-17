import React from "react";
import logo from "../../../assets/netflix-logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
// import "./Header.scss";
import { useState } from "react";
import LoadingScreen from "../../../components/shared/LoadingScreen/LoadingScreen";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const mainReload = () => {
    setLoading(true);
    setLoading(false);
  };

  if (loading) return <LoadingScreen />;
  return (
    <nav className="Header">
      <div className="nav-left">
        <img src={logo} alt="netflix-logo" />
        <ul>
          <li>
            <Link to="/" onClick={mainReload}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tvseries" onClick={mainReload}>
              TV Series
            </Link>
          </li>
          <li>
            <Link to="/films" onClick={mainReload}>
              Films
            </Link>
          </li>
          <li>
            <Link to="/popular" onClick={mainReload}>
              News & Popular
            </Link>
          </li>
          <li>
            <Link to="/" onClick={mainReload}>
              My List
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link>
              <FiSearch className="nav-search" size={17} />
            </Link>
          </li>
          {/* <li>acc-type</li>
          <li>notification</li>
          <li>account</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
