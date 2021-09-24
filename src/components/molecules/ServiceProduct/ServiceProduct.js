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
        "Contar con un aliado y experto en desarrollo a la medida es vital para las organizaciones. Saca el máximo provecho de tus aplicaciones y herramientas empresariales. Incluso, crea las propias cuando ninguna cumpla con los requerimientos de tu empresa.",
      imagen: Develop,
    },
    {
      title: "CRM",
      detail:
        "Obtenga una vista 360° de sus clientes. Gestione la información y procesos con sus clientes aprovechando integraciones con los aplicativos que ya maneja su empresa.",
      imagen: CRM,
    },
    {
      title: "INFRAESTRUCTURA",
      detail:
        "Permite que tu empresa vaya a la vanguardia y haz de la transformación tecnológica una aliada. La infraestructura es la columna vertebral de las compañías, ya sea híbrida o en la nube. Consulta la mejor opción para tu empresa.",
      imagen: infra,
    },
    {
      title: "PRODUCTOS PROPIOS",
      detail:
        "Potencializa los procesos empresariales, con Chatbots, autogestión de contraseñas y muchas otras herramientas que tenemos para tu compañía.",
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
        <span style={{ fontWeight: 600 }}>{title}</span>
        <span style={{ textAlign: "justify" }}>{detail} <Link to="/services-products">Ver más.</Link></span>
      </div>
    </div>
  );

  return (
    <div id="ServiceProduct" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">Servicios y productos</span>
      </div>

      <div className="custom-card-container">
        {services.map(({ title, detail, imagen }) =>
          staticsCard(title, detail, imagen)
        )}
      </div>
    </div>
  );
};
