import React from "react";
import whatsapp from "../../../assets/images/Whatsapp.png";
import "./Button.scss";

export const Button = () => {
  return (
    <button id='whatsapp-button' className="custom-contact-button" type="button">
      <img src={whatsapp} alt="whatsapp" />
    </button>
  );
};
