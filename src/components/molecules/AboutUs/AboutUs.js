import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AboutUs.scss";

export const AboutUs = () => {
  const { PaginaHome } = useSelector((state) => state.lenguage);
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
        <span className="custom-title-span">{PaginaHome.aboutUs}</span>
        <span className="custom-subtitle-span" style={{ width: "70%" }}>
          {PaginaHome.detalleAboutUs} <Link to="/about">Ver más</Link>
        </span>
      </div>

      <div className="custom-card-container">
        {statics.map(({ title, detail }) => staticsCard(title, detail))}
      </div>
    </div>
  );
};
