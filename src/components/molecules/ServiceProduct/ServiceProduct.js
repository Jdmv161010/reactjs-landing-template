import React from "react";
import { Link } from "react-router-dom";
import Develop from "../../../assets/images/IconServicesProducts/desarrollador_ServiciosProductos.svg";
import CRM from "../../../assets/images/IconServicesProducts/crm.svg";
import infra from "../../../assets/images/IconServicesProducts/estructure.svg";
import OwnProducts from "../../../assets/images/IconServicesProducts/ownProducts.svg";
import "./ServiceProduct.scss";
import "animate.css";

export const ServiceProduct = () => {
  const services = [
    {
      title: "DESARROLLO",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur",
      imagen: Develop,
    },
    {
      title: "CRM",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur",
      imagen: CRM,
    },
    {
      title: "INFRAESTRUCTURA",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur",
      imagen: infra,
    },
    {
      title: "PRODUCTOS PROPIOS",
      detail:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur",
      imagen: OwnProducts,
    },
  ];

  const staticsCard = (title, detail, imagen) => (
    <div className="custom-card">
      <div className="custom-card-img">
        <img
          src={imagen}
          alt={title}
          style={{ width: "90%", height: "90%" }}
        ></img>
      </div>
      <div className="custom-card-content" style={{ flex: 1 }}>
        <span style={{ fontWeight: 600}}>{title}</span>
        <span style={{ textAlign: "justify" }}>{detail}</span>
      </div>
    </div>
  );

  return (
    <div id="ServiceProduct" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">Servicios y productos</span>
        <span className="custom-subtitle-span">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur. <Link to="/services-products">Ver más</Link>
        </span>
      </div>

      <div className="custom-card-container">
        {services.map(({ title, detail, imagen }) =>
          staticsCard(title, detail, imagen)
        )}
      </div>
    </div>
  );
};
