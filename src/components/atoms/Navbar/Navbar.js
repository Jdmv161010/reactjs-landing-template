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
    <nav id="custom-navbar">
      <div className="brand">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="Intelecto S.A.S." />
          </div>
        </Link>
      </div>

      <div className="options">
        {options.map((option, index) => (
          <Link key={index} to={option.route}>
            {option.label}
          </Link>
        ))}

        <button
          type="button"
          className="change-lenguage"
          onClick={handleChangeLenguage}
        >
          ESP/ENG
        </button>
      </div>
    </nav>
  );
};
