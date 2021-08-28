import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = ({ options }) => {
  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-brand">
        <div>
          <Link to="/">LOGO</Link>
        </div>
      </div>

      <div className="custom-navbar-options">
        {options.map((option, index) => (
          <Link key={index} to={option.route}>
            {option.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
