import React, { useEffect, useState } from "react";
import Avianca_logo from "../../../assets/images/IconPartners/Avianca_logo.png";
import celsia from "../../../assets/images/IconPartners/celsia.png";
import microsoft from "../../../assets/images/IconPartners/microsoft.png";
import coomeva from "../../../assets/images/IconPartners/coomeva_icon.png";
import icesi from "../../../assets/images/IconPartners/icesi.png";
import "./Partners.scss";
var partners = [0, 5];

export const Partners = () => {
  const logos = [
    { id: 1, image: microsoft, alt: "microsoft" },
    { id: 2, image: Avianca_logo, alt: "Avianca_logo" },
    { id: 3, image: coomeva, alt: "coomeva" },
    { id: 4, image: celsia, alt: "celsia" },
    { id: 5, image: icesi, alt: "icesi" },
    { id: 6, image: celsia, alt: "celsia" },
    { id: 7, image: Avianca_logo, alt: "Avianca_logo" },
    { id: 8, image: coomeva, alt: "coomeva" },
    { id: 9, image: icesi, alt: "icesi" },
    { id: 10, image: microsoft, alt: "microsoft" },
    { id: 11, image: microsoft, alt: "microsoft" },
    { id: 12, image: Avianca_logo, alt: "Avianca_logo" },
    { id: 13, image: coomeva, alt: "coomeva" },
    { id: 14, image: celsia, alt: "celsia" },
    { id: 15, image: icesi, alt: "icesi" },
    { id: 16, image: microsoft, alt: "microsoft" },
    { id: 17, image: Avianca_logo, alt: "Avianca_logo" },
    { id: 18, image: coomeva, alt: "coomeva" },
    { id: 19, image: celsia, alt: "celsia" },
    { id: 20, image: icesi, alt: "icesi" },
  ];

  const [carousel, setCarousel] = useState(
    logos.slice(partners[0], partners[1])
  );

  const handleChangeNext = () => {
    if (partners[1] === 20) {
      partners[1] = 0;
    } else if (partners[0] === 20) {
      partners[1] = 5;
    } else {
      partners = [partners[0] + 1, partners[1] + 1];
    }
    setCarousel(logos.slice(partners[0], partners[1]));
  };

  console.log("Partners", partners);
  console.log("Carousel", carousel);

  const logo = (image, alt) => (
    <div className="custom-image-content">
      <img src={image} alt={alt} />
    </div>
  );

  setTimeout(() => {
    handleChangeNext();
  }, 3000);

  return (
    <div id="Partners">
      <div className="custom-content-section">
        <div className="custom-image-container">
          {carousel.map(({ image, alt }) => logo(image, alt))}
        </div>
      </div>
    </div>
  );
};
