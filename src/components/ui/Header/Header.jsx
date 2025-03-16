import React from "react";
import logo from "../../../assets/netflix-logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
// import "./Header.scss";

const Header = () => {
  return (
    <nav className="Header">
      <div className="nav-left">
        <img src={logo} alt="netflix-logo" />
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>TV Series</Link></li>
          <li><Link>Films</Link></li>
          <li><Link>News & Popular</Link></li>
          <li><Link>My List</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li><Link><FiSearch className="nav-search" size={17}/></Link></li>
          {/* <li>acc-type</li>
          <li>notification</li>
          <li>account</li> */}

        </ul>
      </div>
    </nav>
  );
};

export default Header;
