import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/intelecto_blanco.png";
import { ChangeLenguage } from "../../../store/actions/lenguageActions";
import "./Navbar.scss";

export const Navbar = ({ options }) => {
  const dispatch = useDispatch();

  const handleChangeLenguage = () => {
    dispatch(ChangeLenguage());
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-brand">
        <div>
          <Link to="/">
            <div className="custom-logo-container">
              <img src={logo} alt="Intelecto S.A.S." />
            </div>
          </Link>
        </div>
      </div>

      <div className="custom-navbar-options">
        {options.map((option, index) => (
          <Link key={index} to={option.route}>
            {option.label}
          </Link>
        ))}

        <button
          type="button"
          className="custom-change-lenguage-button"
          onClick={handleChangeLenguage}
        >
          ESP/ENG
        </button>
      </div>
    </nav>
  );
};
