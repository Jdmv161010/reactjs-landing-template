import React from "react";
import Adsecurity from "../../../assets/images/Services&Productos_Images/adsecurity.png";
import AdsecurityPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/AdSecuty.jpeg";
import Girapp from "../../../assets/images/Services&Productos_Images/Girapp.png";
import Bot from "../../../assets/images/Services&Productos_Images/BotInty.png";
import BotPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/Bot.jpg";
import rMarketing from "../../../assets/images/Services&Productos_Images/rMarketing.png";
import rMarketingPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/rMarketing.pdf";
import "./ProductsServices.scss";

export const ProductsServices = () => {
  const services = [
    {
      imagen: Adsecurity,
      href: AdsecurityPDF,
    },
    {
      imagen: Girapp,
      href: AdsecurityPDF,
    },
    {
      imagen: Bot,
      href: BotPDF,
    },
    {
      imagen: rMarketing,
      href: rMarketingPDF,
    },
  ];

  const staticsCard = (imagen, href) => (
    <a href={href} target="_blank">
      <div className="custom-card">
        <div className="custom-card-img">
          <img src={imagen} style={{ width: "95%" }} />
        </div>
      </div>
    </a>
  );

  return (
    <div
      id="ProductsServicesLanding"
      className="custom-ProductsServices-container"
    >
      <div
        className="custom-content-section"
        style={{ margin: "0 !important", height: "70vh" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">Servicios y productos</span>
        </div>
      </div>

      <div id="ProductsServicesSection1" className="custom-content-section">
        <div className="custom-row">
          <div
            className="custom-image-container CRM"
            style={{ flex: "1" }}
          ></div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">CRM</span>
            <br />
            <span className="custom-subtitle-span">
              Gestione la relaciòn con sus clientes a travès de Microsoft
              Dynamics 365. Obtenga todo lo que necesita en una sola
              herramienta. Controle los procesos de ventas, servicio al cliente,
              marketing, recursos humanos, entre otros.
              <br />
              <br />
              <ul style={{ margin: "0 20px" }}>
                <li>Ventas</li>
                <li>Servicio al cliente</li>
                <li>Marketing</li>
                <li>Recursos Humanos</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">Desarrollo</span>
            <br />
            <span className="custom-subtitle-span">
              Aprovechamos nuestro conocimiento y experiencias para mejorar los
              procesos, crear nuevos recursos o sistemas que permitan un
              constante avance a su empresa. La innovación es parte fundamental
              de nuestros pilares ybuscamos entregar los mejores resultados con
              excelente calidad.
            </span>
          </div>
          <div
            className="custom-image-container DESARROLLO"
            style={{ flex: "1" }}
          ></div>
        </div>
        <div className="custom-row">
          <div
            className="custom-image-container INFRAESTRUCTURA"
            style={{ flex: "1" }}
          ></div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">Infraestructura</span>
            <br />
            <span className="custom-subtitle-span">
              Brindamos consultoría, implementación y soporte en infraestructura
              Microsoft tanto local, híbrida o en Azure. Descubre las bondades
              que tiene la nube en Microsoft y lo que te permite ahorrar en
              costos de equipos. Convierte a las plataformas en aliadas y saca
              el máximo provecho.
            </span>
          </div>
        </div>
        <div className="custom-header-content">
          <span
            className="custom-title-span"
            style={{ marginTop: "80px", textAlign: "center" }}
          >
            Productos propios
          </span>
          <span
            className="custom-subtitle-span"
            style={{ textAlign: "center" }}
          >
            Contamos con varias soluciones que le ayudarán a brindarle mayor
            productividad y cumplimiento a sus procesos.
          </span>
        </div>

        <div className="custom-card-container">
          {services.map(({ imagen, href }) => staticsCard(imagen, href))}
        </div>
      </div>
    </div>
  );
};
