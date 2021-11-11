import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Develop from "../../../assets/images/IconServicesProducts/desarrollador_ServiciosProductos.svg";
import CRM from "../../../assets/images/IconServicesProducts/crm.svg";
import infra from "../../../assets/images/IconServicesProducts/estructure.svg";
import OwnProducts from "../../../assets/images/IconServicesProducts/ownProducts.svg";
import "./ServiceProduct.scss";

export const ServiceProduct = () => {
  const { PaginaHome, Others } = useSelector((state) => state.lenguage);
  const services = [
    {
      title: PaginaHome.servicio1,
      detail: PaginaHome.detalleS1,
      imagen: Develop,
    },
    {
      title: PaginaHome.servicio2,
      detail: PaginaHome.detalleS2,
      imagen: CRM,
    },
    {
      title: PaginaHome.servicio3,
      detail: PaginaHome.detalleS3,
      imagen: infra,
    },
    {
      title: PaginaHome.productos,
      detail: PaginaHome.detalleP,
      imagen: OwnProducts,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const staticsCard = (title, detail, imagen) => (
    <div className="custom-card">
      <div className="custom-card-img">
        <img src={imagen} alt={title}></img>
      </div>
      <div className="custom-card-content" style={{ flex: 1 }}>
        <span className="custom-card-value">{title}</span>
        <span className="custom-card-detail">{detail}</span>
        <Link onClick={scrollToTop} to="/services-products">
          {Others.VerMas}.
        </Link>
      </div>
    </div>
  );

  return (
    <div id="ServiceProduct" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">{PaginaHome.serviceProduct}</span>
      </div>

      <div className="custom-card-container">
        {services.map(({ title, detail, imagen }) =>
          staticsCard(title, detail, imagen)
        )}
      </div>
      <button className="custom-button-field">
        <a target="_blank" href="https://acortar.link/PS1xhf">
          {PaginaHome.buttonMicrosoft}
        </a>
      </button>
    </div>
  );
};
