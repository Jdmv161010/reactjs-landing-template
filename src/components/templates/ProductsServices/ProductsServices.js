import React from "react";
import { useSelector } from "react-redux";
import Adsecurity from "../../../assets/images/Services&Productos_Images/adsecurity.png";
import AdsecurityPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/AdSecuty.jpeg";
import Girapp from "../../../assets/images/Services&Productos_Images/Girapp.png";
import Bot from "../../../assets/images/Services&Productos_Images/BotInty.png";
import BotPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/Bot.jpg";
import rMarketing from "../../../assets/images/Services&Productos_Images/rMarketing.png";
import rMarketingPDF from "../../../assets/images/Services&Productos_Images/PdfProductos/rMarketing.pdf";
import Desarrollo from "../../../assets/images/Desarrollo.png";
import Infraestructura from "../../../assets/images/Infraestructura.png";
import CRM from "../../../assets/images/CRM.png";
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

  const { ProductsServices } = useSelector((state) => state.lenguage);

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
        style={{ margin: "0 !important", height: "auto" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">{ProductsServices.titulo}</span>
        </div>
      </div>

      <div id="ProductsServicesSection1" className="custom-content-section">
        <div className="custom-row reverse" style={{ marginTop: "100px" }}>
          <div className="custom-image-container" style={{ flex: 1 }}>
            <img src={CRM} alt="CRM" />
          </div>
          <div className="custom-content" style={{ flex: 1 }}>
            <span className="custom-title-span">
              {ProductsServices.servicio1}
            </span>
            <br />
            <span
              className="custom-subtitle-span"
              dangerouslySetInnerHTML={{
                __html: ProductsServices.detalle1,
              }}
            ></span>
          </div>
        </div>

        <div className="custom-row">
          <div
            className="custom-content"
            style={{ flex: 1, alignItems: "flex-start" }}
          >
            <span className="custom-title-span">
              {ProductsServices.servicio2}
            </span>
            <br />
            <span className="custom-subtitle-span">
              {ProductsServices.detalle2}
            </span>
          </div>
          <div className="custom-image-container" style={{ flex: 1 }}>
            <img src={Desarrollo} alt="Desarrollo" />
          </div>
        </div>

        <div className="custom-row reverse" style={{ marginBottom: "80px" }}>
          <div className="custom-image-container" style={{ flex: 1 }}>
            <img src={Infraestructura} alt="Infraestructura" />
          </div>
          <div className="custom-content" style={{ flex: 1 }}>
            <span className="custom-title-span">
              {ProductsServices.servicio3}
            </span>
            <br />
            <span className="custom-subtitle-span">
              {ProductsServices.detalle3}
            </span>
          </div>
        </div>
      </div>

      <div className="own-products">
        <div className="custom-header-content">
          <span className="custom-title-span" style={{ textAlign: "center" }}>
            {ProductsServices.productos}
          </span>
          <span
            className="custom-subtitle-span"
            style={{ textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: ProductsServices.detalleProductos,
            }}
          ></span>
        </div>

        <div className="custom-card-container">
          {services.map(({ imagen, href }) => staticsCard(imagen, href))}
        </div>
      </div>
    </div>
  );
};
