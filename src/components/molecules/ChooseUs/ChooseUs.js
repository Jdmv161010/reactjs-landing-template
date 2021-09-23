import React from "react";
import { Link } from "react-router-dom";
import BG_Principal from "../../../assets/images/BackGrounds/BG_Principal.mp4";
import Usuarios from "../../../assets/images/IconChooseUs/Usuarios.svg";
import Clientes from "../../../assets/images/IconChooseUs/Clientes.svg";
import Implementacion from "../../../assets/images/IconChooseUs/Implementacion.svg";
import Experiencia from "../../../assets/images/IconChooseUs/Experiencia.svg";
import "./ChooseUs.scss";

export const ChooseUs = () => {
  const statics = [
    { title: "+ 120", 
      detail: "Clientes",
      imagen: Clientes,},
    { title: "+ 50.000", 
      detail: "Usuarios",
      imagen: Usuarios,},
    { title: "+ 250", 
      detail: "Implementaciones",
      imagen: Implementacion, },
    {
      title: "+ 19",
      detail: "Años de Experiencia",
      imagen: Experiencia,
    },
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
      <span className="custom-card-value">{title}</span>
      <span>{detail}</span>
    </div>
  );

  return (
    <div id="ChooseUs">
      <div style={{ flex: 1.1 }}></div>
      <div className="custom-content-section" style={{ flex: 1.9 }}>
        <div className="custom-header-content">
          <span className="custom-title-span">¿Por qué escogernos?</span>
          <span className="custom-subtitle-span" style={{ width: "100%", textAlign: "justify" }}>
           TESTIMONIO:
           <br/>
           <br/>
           <i>"El indicador de satisfacción del cliente se ha incrementado, debido a que disponen de la herramienta todo el día. Adicional, es una herramienta muy sencilla de utilizar. La implementacion fue rápida y sencilla."
           </i>
           <br/>
           <br/>
           Claudia Fernanda Taborda H.
           <br/>
           Cámara de comercio de Cali.
           <br/>
           Coordinadora de Mejoramiento.
           
          </span>
        </div>

        <div className="custom-card-container">
          {statics.map(({ title, detail, imagen }) => staticsCard(title, detail, imagen))}
        </div>
      </div>
    </div>
  );
};
