import React from "react";
import Cali from "../../../assets/images/BackGrounds/Cali_City.mp4";
import CRM from "../../../assets/images/Services&Productos_Images/CRM_Intelecto_Imagen.jpg";
import Desarrollo from "../../../assets/images/Services&Productos_Images/Imagen_Desarrollo_Intelecto.jpg";
import Infraestructura from "../../../assets/images/Services&Productos_Images/Infraestructura_Imagen_Intelecto.jpg";
import Adsecurity from "../../../assets/images/Services&Productos_Images/adsecurity.png";
import Girapp from "../../../assets/images/Services&Productos_Images/Girapp.jpg";
import Bot from "../../../assets/images/Services&Productos_Images/BotInty.png";
import rMarketing from "../../../assets/images/Services&Productos_Images/rMarketing.png";
import "./ProductsServices.scss";

export const ProductsServices = () => {
  const services = [
    {
      imagen: Adsecurity,
    },
    {
      imagen: Girapp,
    },
    {
      imagen: Bot,
    },
    {
      imagen: rMarketing,
    },
  ];

  const staticsCard = (imagen) => (
    <div className="custom-card">
      <div className="custom-card-img">
      <img
          src={imagen}
          style={{ width: "60%", height: "60%" }}
        >
        </img>
      </div>
    </div>
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
          <div className="custom-image-container" style={{ flex: "1"}}>
            <img 
              src= {CRM}
              height = "100%"
              width = "90%">
            </img>  
          </div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">CRM</span>
            <span className="custom-subtitle-span">
              <br/>
              Gestione la relaciòn con sus clientes a travès de Microsoft Dynamics 365.
              Obtenga todo lo que necesita en una sola herramienta. Controle los procesos de ventas, 
              , servicio al cliente, marketing, recursos humanos, entre otros.
              <br />
              <br />
              - Ventas.
              <br />
              - Servicio al cliente.
              <br /> 
              - Marketing. 
              <br />
              - Recursos Humanos.
              <br />
            </span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">DESARROLLO</span>
            <span className="custom-subtitle-span">
              <br/>
              Aprovechamos nuestro conocimiento y experiencias para mejorar los procesos,
              crear nuevos recursos o sistemas que permitan un constante avance a su empresa.
              La innovación es parte fundamental de nuestros pilares ybuscamos entregar los mejores 
              resultados con excelente calidad.
            </span>
          </div>
          <div className="custom-image-container" style={{ flex: "1" }}>
            <img 
                src= {Desarrollo}
                height = "100%"
                width = "90%">
              </img> 
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-image-container" style={{ flex: "1"}}>
          <img 
                src= {Infraestructura}
                height = "100%"
                width = "90%">
              </img> 
          </div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">INFRAESTRUCTURA</span>
            <span className="custom-subtitle-span">
              <br/>
              Brindamos consultoría, implementación y soporte en infraestructura Microsoft tanto local,
              híbrida o en Azure. Descubre las bondades que tiene la nube en Microsoft y lo que te permite ahorrar en costos de equipos.
              Convierte a las plataformas en aliadas y saca el máximo provecho.
            </span>
          </div>
        </div>
        <span
          className="custom-title-span"
          style={{ marginTop: "80px", textAlign: "center" }}
        >
          Productos propios
        </span>
        <span className="custom-subtitle-span" style={{ textAlign: "center" }}>
          <br/>
          Contamos con varias soluciones que le ayudarán a brindarle mayor productividad y cumplimiento a sus procesos.
        </span>

        <div className="custom-card-container">
          {services.map(({imagen}) => staticsCard(imagen))}
        </div>
      </div>
    </div>
  );
};
