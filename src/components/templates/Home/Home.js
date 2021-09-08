import React from "react";
import { AboutUs } from "../../molecules/AboutUs/AboutUs";
import { ChooseUs } from "../../molecules/ChooseUs/ChooseUs";
import { Contact } from "../../molecules/Contact/Contact";
import { Partners } from "../../molecules/Partners/Partners";
import { ServiceProduct } from "../../molecules/ServiceProduct/ServiceProduct";
import BG_Principal from "../../../assets/images/BackGrounds/BG_Principal.mp4";
import "./Home.scss";

export const Home = () => {
  return (
    <div id="Home" className="custom-home-container">
      <div
        id="Section1"
        className="custom-content-section"
        style={{ margin: "0 !important" }}
      >
        <video
          className="video"
          preload="auto"
          autoplay="true"
          loop="loop"
          aria-hidden="true"
          playsinline="true"
          muted
          volume="0"
        >
          <source src={BG_Principal} type="video/mp4" />
        </video>
        <span className="custom-title-span" style={{ width: "100%" }}>
          Aplicaciones empresariales que transforman su negocio
        </span>

        <span className="custom-subtitle-span" style={{ width: "50%" }}>
          Simplificación y conexión de procesos empresariales y mejoramiento de
          las interacciones y relaciones con sus clientes
        </span>

        <button className="custom-partner-button">
          <a
            target="_blank"
            href="https://www.microsoft.com/en-us/solution-providers/partnerdetails/intelecto_bfcc0776-5e02-48ae-a562-ccdd5f4b9ea0/e7416b38-7167-4b51-9f15-ed8debf4c1bb"
          >
            Socio Microsoft
          </a>
        </button>
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
