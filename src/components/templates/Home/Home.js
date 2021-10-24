import React from "react";
import { AboutUs } from "../../molecules/AboutUs/AboutUs";
import { ChooseUs } from "../../molecules/ChooseUs/ChooseUs";
import { Partners } from "../../molecules/Partners/Partners";
import { ServiceProduct } from "../../molecules/ServiceProduct/ServiceProduct";
import BG_Principal from "../../../assets/images/BackGrounds/BG_Principal.mp4";
import "./Home.scss";
import { useSelector } from "react-redux";

export const Home = () => {
  const { PaginaHome } = useSelector((state) => state.lenguage);

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
          autoPlay
          loop
          aria-hidden
          playsInline
          muted
        >
          <source src={BG_Principal} type="video/mp4" />
        </video>

        <span className="custom-title-span" style={{ width: "100%" }}>
          {PaginaHome.home}
        </span>

        <span className="custom-subtitle-span" style={{ width: "50%" }}>
          {PaginaHome.detalleHome}
        </span>
      </div>
      <div className="custom-separator" />
      <div id="Section2">
        <AboutUs />
      </div>
      <div className="custom-separator" />
      <div id="Section3">
        <ServiceProduct />
      </div>
      <div className="custom-separator" />
      <div id="Section4">
        <Partners />
      </div>
      <div className="custom-separator" />
      <div id="Section5">
        <ChooseUs />
      </div>
      <div className="custom-separator" />
    </div>
  );
};
