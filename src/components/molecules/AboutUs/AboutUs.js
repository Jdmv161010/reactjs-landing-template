import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.scss";

export const AboutUs = () => {
  const statics = [
    { title: "Microsoft Dynamics CRM", detail: "Colombia" },
    { title: "Microsoft Dynamics CRM", detail: "Latinoamérica y Caribe" },
    { title: "Microsoft", detail: "Gold Partner" },
    {
      title: "Microsoft Seguridad",
      detail: "Sector Público y Seguridad Nacional",
    },
    { title: "Microsoft Consulting Services", detail: "Colombia" },
  ];

  const staticsCard = (title, detail) => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <span className="custom-card-value">{title}</span>
      <span>{detail}</span>
    </div>
  );
  return (
    <div id="AboutUs" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">Acerca de nosotos</span>
        <span className="custom-subtitle-span" style={{ width: "70%" }}>
          Empresa vallecaucana con más de 19 años de experiencia en apoyo
          tecnológico en el sector público y privado, especializados en el área
          de Proyectos de CRM, Desarrollo a la medida, Infraestructura y Azure.
          Atendiendo al cliente con altos estándares de calidad, servicio y
          sentido de pertenencia. <Link to="/about">Ver más</Link>
        </span>
      </div>

      <div className="custom-card-container">
        {statics.map(({ title, detail }) => staticsCard(title, detail))}
      </div>
    </div>
  );
};
