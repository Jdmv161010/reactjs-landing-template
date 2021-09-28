import React, { useEffect, useState } from "react";
import Avianca_logo from "../../../assets/images/IconPartners/Avianca_logo.png";
import celsia from "../../../assets/images/IconPartners/celsia.png";
import microsoft from "../../../assets/images/IconPartners/microsoft.png";
import coomeva from "../../../assets/images/IconPartners/coomeva_icon.png";
import icesi from "../../../assets/images/IconPartners/icesi.png";
import aguila_roja from "../../../assets/images/IconPartners/aguila_roja.png";
import ARN from "../../../assets/images/IconPartners/ARN.png";
import ComercioCali from "../../../assets/images/IconPartners/ComercioCali.png";
import COREC from "../../../assets/images/IconPartners/COREC.png";
import ecopetrol from "../../../assets/images/IconPartners/ecopetrol.png";
import eficacia from "../../../assets/images/IconPartners/eficacia.png";
import Fanalca from "../../../assets/images/IconPartners/Fanalca.png";
import harina from "../../../assets/images/IconPartners/harina_del_valle.png";
import incauca from "../../../assets/images/IconPartners/incauca.png";
import ingenio from "../../../assets/images/IconPartners/ingenio.png";
import ingredion from "../../../assets/images/IconPartners/ingredion.png";
import siesa from "../../../assets/images/IconPartners/siesa.png";
import tecnoquimicas from "../../../assets/images/IconPartners/tecnoquimicas.png";
import vision from "../../../assets/images/IconPartners/vision.png";
import "./Partners.scss";
var partners = [0, 5];

export const Partners = () => {
  const logos = [
    { id: 1, image: microsoft, alt: "microsoft" },
    { id: 2, image: aguila_roja, alt: "aguila_roja" },
    { id: 3, image: ARN, alt: "ARN" },
    { id: 4, image: Avianca_logo, alt: "Avianca_logo" },
    { id: 5, image: celsia, alt: "celsia" },
    { id: 6, image: ComercioCali, alt: "ComercioCali" },
    { id: 7, image: coomeva, alt: "coomeva" },
    { id: 8, image: COREC, alt: "COREC" },
    { id: 9, image: ecopetrol, alt: "ecopetrol" },
    { id: 10, image: eficacia, alt: "eficacia" },
    { id: 11, image: Fanalca, alt: "Fanalca" },
    { id: 12, image: harina, alt: "harina_del_valle" },
    { id: 13, image: icesi, alt: "icesi" },
    { id: 14, image: incauca, alt: "incauca" },
    { id: 15, image: ingenio, alt: "ingenio" },
    { id: 16, image: ingredion, alt: "ingredion" },
    { id: 17, image: siesa, alt: "siesa" },
    { id: 18, image: tecnoquimicas, alt: "tecnoquimicas" },
    { id: 19, image: vision, alt: "vision" },
  ];

  const [carousel, setCarousel] = useState(
    logos.slice(partners[0], partners[1])
  );

  const handleChangeNext = () => {
    if (partners[1] === 20) {
      partners = [0, 5];
    } else {
      partners = [partners[0] + 1, partners[1] + 1];
    }
    setCarousel(logos.slice(partners[0], partners[1]));
  };

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
      <span
        className="custom-title-span"
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Clientes
      </span>
      <div className="custom-content-section">
        <div className="custom-image-container">
          {carousel.map(({ image, alt }) => logo(image, alt))}
        </div>
      </div>
    </div>
  );
};
