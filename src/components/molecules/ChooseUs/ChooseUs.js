import React from "react";
import { Link } from "react-router-dom";
import BG_Principal from "../../../assets/images/BackGrounds/BG_Principal.mp4";
import Usuarios from "../../../assets/images/IconChooseUs/Usuarios.svg";
import Clientes from "../../../assets/images/IconChooseUs/Clientes.svg";
import Implementacion from "../../../assets/images/IconChooseUs/Implementacion.svg";
import Experiencia from "../../../assets/images/IconChooseUs/Experiencia.svg";
import "./ChooseUs.scss";
import { useSelector } from "react-redux";

export const ChooseUs = () => {
  const { PaginaHome } = useSelector((state) => state.lenguage);
  const statics = [
    { title: "+ 120", detail: PaginaHome.estadistica1, imagen: Clientes },
    { title: "+ 50.000", detail: PaginaHome.estadistica2, imagen: Usuarios },
    { title: "+ 250", detail: PaginaHome.estadistica3, imagen: Implementacion },
    { title: "+ 19", detail: PaginaHome.estadistica4, imagen: Experiencia },
  ];

  const staticsCard = (title, detail, imagen) => (
    <div className="custom-card">
      <div className="custom-card-img">
        <img
          src={imagen}
          alt={title}
          style={{ width: "60%", height: "60%" }}
        ></img>
      </div>
      <span className="custom-card-value" style={{ fontSize: "25px" }}>
        {title}
      </span>
      <span style={{ fontSize: "19px" }}>{detail}</span>
    </div>
  );

  return (
    <div id="ChooseUs">
      <div style={{ flex: 1.1 }}></div>
      <div className="custom-content-section" style={{ flex: 1.9 }}>
        <div className="custom-header-content">
          <span className="custom-title-span">{PaginaHome.chooseUs}</span>
          <span
            className="custom-subtitle-span span-flex"
            style={{ width: "100%", textAlign: "justify" }}
          >
            <cite style={{ fontSize: "19px" }}>{PaginaHome.testimonio}</cite>
            <span style={{ fontSize: "18px" }}>
              <b style={{ fontSize: "18px" }}>Claudia Fernanda Taborda H.</b>
              <br />
              Cámara de comercio de Cali.
              <br />
              Coordinadora de Mejoramiento.
            </span>
          </span>
        </div>

        <div className="custom-card-container">
          {statics.map(({ title, detail, imagen }) =>
            staticsCard(title, detail, imagen)
          )}
        </div>
      </div>
    </div>
  );
};
