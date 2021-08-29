import React from "react";
import auxLogo from "../../../assets/images/auxLogo.png";
import "./Partners.scss";

export const Partners = () => {
  const logos = [1, 2, 3, 4, 5, 6];

  const logo = () => (
    <div className="custom-image-content">
      <img src={auxLogo} alt="logo" />
    </div>
  );

  return (
    <div id="Partners">
      <div className="custom-content-section">
        <div className="custom-image-container">{logos.map(() => logo())}</div>
      </div>
    </div>
  );
};
