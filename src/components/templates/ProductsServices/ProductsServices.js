import React from "react";
import Cali from "../../../assets/images/BackGrounds/Cali_City.mp4";
import "./ProductsServices.scss";

export const ProductsServices = () => {
  const services = [
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Socio del Año de Microsoft Dynamics CRM en Colombia en 2009, 2011, 2012, 2013 y 2015.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Socio del Año de Microsoft Dynamics CRM en Latinoamérica y Caribe en 2008 y 2009.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Socio del Año de Microsoft en Seguridad en Sector Público y Seguridad Nacional en Latinoamérica y Caribe en 2014 y 2016.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Socio del Año de Microsoft en Seguridad en Sector Público y Seguridad Nacional en Latinoamérica y Caribe en 2014 y 2016.",
    },
  ];

  const staticsCard = (title, detail) => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <span className="custom-card-value">{title}</span>
      <span>{detail}</span>
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
          <div className="custom-image-container" style={{ flex: "1" }}></div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">Lorem Ipsum</span>
            <span className="custom-subtitle-span">
              Intelecto Soluciones y Tecnología S.A.S. fue creada en abril de
              2002, en la ciudad de Cali.
              <br />
              Rápidamente obtuvo participación en proyectos tecnológicos de
              grandes empresas en la región de distintos sectores, ayudándolas a
              mejorar sus procesos empresariales. De igual manera se destacó y
              logró entrar a competir en proyectos a nivel nacional.
            </span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">Lorem Ipsum</span>
            <span className="custom-subtitle-span">
              Intelecto Soluciones y Tecnología S.A.S. fue creada en abril de
              2002, en la ciudad de Cali.
              <br />
              Rápidamente obtuvo participación en proyectos tecnológicos de
              grandes empresas en la región de distintos sectores, ayudándolas a
              mejorar sus procesos empresariales. De igual manera se destacó y
              logró entrar a competir en proyectos a nivel nacional.
            </span>
          </div>
          <div className="custom-image-container" style={{ flex: "1" }}></div>
        </div>
        <div className="custom-row">
          <div className="custom-image-container" style={{ flex: "1" }}></div>
          <div className="custom-content" style={{ flex: "1" }}>
            <span className="custom-title-span">Lorem Ipsum</span>
            <span className="custom-subtitle-span">
              Intelecto Soluciones y Tecnología S.A.S. fue creada en abril de
              2002, en la ciudad de Cali.
              <br />
              Rápidamente obtuvo participación en proyectos tecnológicos de
              grandes empresas en la región de distintos sectores, ayudándolas a
              mejorar sus procesos empresariales. De igual manera se destacó y
              logró entrar a competir en proyectos a nivel nacional.
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
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </span>

        <div className="custom-card-container">
          {services.map(({ title, detail }) => staticsCard(title, detail))}
        </div>
      </div>
    </div>
  );
};
