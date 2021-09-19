import React from "react";
import Cali from "../../../assets/images/BackGrounds/Cali_City.mp4";
import "./About.scss";

export const About = () => {
  const services = [
    {
      title: "Microsoft Dynamics CRM en Colombia.",
      detail:
        "Socio del Año de Microsoft Dynamics CRM en Colombia en 2009, 2011, 2012, 2013 y 2015.",
    },
    {
      title: "Microsoft Dynamics CRM en Latinoamérica y Caribe.",
      detail:
        "Socio del Año de Microsoft Dynamics CRM en Latinoamérica y Caribe en 2008 y 2009.",
    },
    {
      title: "Microsoft en Seguridad en Sector Público y Seguridad Nacional.",
      detail:
        "Socio del Año de Microsoft en Seguridad en Sector Público y Seguridad Nacional en Latinoamérica y Caribe en 2014 y 2016.",
    },
    {
      title: "Microsoft Consulting Services en Colombia.",
      detail:
        "Socio de Servicios del Año en Microsoft en Colombia en 2014 y 2015.",
    },
    {
      title: "Microsoft Gold Partner.",
      detail: "Somos Gold Partner de Microsoft desde hace más de 10 años.",
    },
  ];

  const staticsCard = (title, detail) => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <div className="custom-card-content" style={{ flex: 1 }}>
        <span style={{ fontWeight: 600, textAlign: "left" }}>{title}</span>
        <span style={{ textAlign: "justify" }}>{detail}</span>
      </div>
    </div>
  );

  return (
    <div id="AboutLanding" className="custom-about-container">
      <div
        className="custom-content-section"
        style={{ margin: "0 !important", height: "70vh" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">Acerca de nosotos</span>
        </div>
      </div>

      <div id="AboutSection1" className="custom-content-section">
        <div className="custom-row">
          <div className="custom-video-container">
            <video
              className="video"
              preload="auto"
              autoplay="true"
              loop="loop"
              aria-hidden="true"
              playsinline="true"
              muted
              volume="0"
              width="600"
              height="auto"
            >
              <source src={Cali} type="video/mp4" />
            </video>
          </div>
          <div className="custom-content" style={{ flex: "0.7" }}>
            <span className="custom-subtitle-span">
              Intelecto Soluciones y Tecnología S.A.S. fue creada en abril de
              2002, en la ciudad de Cali.
              <br />
              <br />
              Rápidamente obtuvo participación en proyectos tecnológicos de
              grandes empresas en la región de distintos sectores, ayudándolas a
              mejorar sus procesos empresariales. De igual manera se destacó y
              logró entrar a competir en proyectos a nivel nacional.
            </span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "0.7" }}>
            <span className="custom-subtitle-span">
              El auge de la transformación tecnológica le abre las puertas en
              importantes empresas, consiguiendo así altos estándares y
              reconocimientos a nivel latinoamericano.
              <br />
              <br />
              Intelecto es Socio Gold de Microsoft, destacándose a lo largo de
              su trayectoria en servicios especializados de consultoría en
              Microsoft Dynamics 365, integraciones con diferentes productos y
              tecnologías, soporte de infraestructura local y en Azure. La
              innovación es uno de los pilares que destaca a nuestro equipo de
              alto desempeño y reflejo de ello son los casos de éxito.
            </span>
          </div>
          <div className="custom-image-container"></div>
        </div>
        <div className="custom-card-container">
          {services.map(({ title, detail }) => staticsCard(title, detail))}
        </div>
      </div>
    </div>
  );
};
