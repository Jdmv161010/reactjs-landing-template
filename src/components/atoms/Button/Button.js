import React from "react";
import whatsapp from "../../../assets/images/Whatsapp.png";
// import whatsapp from "../../../assets/images/WhatsApp.svg";
import "./Button.scss";

export const Button = () => {
  return (
    <button
      id="whatsapp-button"
      className="custom-contact-button"
      type="button"
    >
      <a href="https://wa.link/ikjgxe" target="_blank">
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </button>
  );
};
