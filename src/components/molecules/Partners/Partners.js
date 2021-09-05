import React from "react";
import Avianca_logo from "../../../assets/images/IconPartners/Avianca_logo.png";
import celsia from "../../../assets/images/IconPartners/celsia.png";
import microsoft from "../../../assets/images/IconPartners/microsoft.png";
import coomeva from "../../../assets/images/IconPartners/coomeva_icon.png";
import icesi from "../../../assets/images/IconPartners/logo-icesi.png";
import auxLogo from "../../../assets/images/auxLogo.png";
import "./Partners.scss";

export const Partners = () => {
  const logos = [1, 2, 3, 4, 5, 6];

  const logo = () => (
    <div className="custom-image-content">
      <img src={microsoft} alt="logo" />
    </div>
  );
  const logo2 = () => (
    <div className="custom-image-content">
      <img src={Avianca_logo} alt="logo" />
    </div>
  );
  const logo3 = () => (
    <div className="custom-image-content">
      <img src={coomeva} alt="logo" />
    </div>
  );
  const logo4 = () => (
    <div className="custom-image-content">
      <img src={celsia} alt="logo" />
    </div>
  );
  const logo5 = () => (
    <div className="custom-image-content">
      <img src={icesi} alt="logo" />
    </div>
  );

  return (
    <div id="Partners">
      <div className="custom-content-section">
        <div className="custom-image-container">
          {logo()}
          {logo2()}
          {logo3()}
          {logo4()}
          {logo5()}
          </div>
      </div>
    </div>
  );
};
