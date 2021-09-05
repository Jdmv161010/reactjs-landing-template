import React from "react";
import Avianca_logo from "../../../assets/images/IconPartners/Avianca_logo.png";
import celsia from "../../../assets/images/IconPartners/celsia.png";
import microsoft from "../../../assets/images/IconPartners/microsoft.png";
import coomeva from "../../../assets/images/IconPartners/coomeva_icon.png";
import icesi from "../../../assets/images/IconPartners/icesi.png";
import "./Partners.scss";

export const Partners = () => {
  const logos = [
    { image: microsoft, alt: "microsoft" },
    { image: Avianca_logo, alt: "Avianca_logo" },
    { image: coomeva, alt: "coomeva" },
    { image: celsia, alt: "celsia" },
    { image: icesi, alt: "icesi" },
  ];

  const logo = (image, alt) => (
    <div className="custom-image-content">
      <img src={image} alt={alt} />
    </div>
  );

  return (
    <div id="Partners">
      <div className="custom-content-section">
        <div className="custom-image-container">
          {logos.map(({ image, alt }) => logo(image, alt))}
        </div>
      </div>
    </div>
  );
};
