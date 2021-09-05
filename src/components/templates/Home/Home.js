import React from "react";
import { AboutUs } from "../../molecules/AboutUs/AboutUs";
import { ChooseUs } from "../../molecules/ChooseUs/ChooseUs";
import { Contact } from "../../molecules/Contact/Contact";
import { Partners } from "../../molecules/Partners/Partners";
import { ServiceProduct } from "../../molecules/ServiceProduct/ServiceProduct";
import "./Home.scss";

export const Home = () => {
  return (
    <div id="Home" className="custom-home-container">
      <div
        id="Section1"
        className="custom-content-section"
        style={{ margin: "0 !important" }}
      >
        <span className="custom-title-span">
          Aplicaciones empresariales que transforman su negocio
        </span>

        <span className="custom-subtitle-span">
          Simplificación y conexión de procesos empresariales y mejoramiento de
          las interacciones y relaciones con sus clientes
        </span>
      </div>
      <div id="Section2">
        <AboutUs />
      </div>
      <div id="Section3">
        <ServiceProduct />
      </div>
      <div id="Section4">
        <Partners />
      </div>
      <div id="Section5">
        <ChooseUs />
      </div>
      <div id="Section5">
        <Contact />
      </div>
    </div>
  );
};
