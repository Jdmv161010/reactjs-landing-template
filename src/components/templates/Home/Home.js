import React from "react";
import { useSelector } from "react-redux";
import { AboutUs } from "../../molecules/AboutUs/AboutUs";
import { ChooseUs } from "../../molecules/ChooseUs/ChooseUs";
import { Partners } from "../../molecules/Partners/Partners";
import { ServiceProduct } from "../../molecules/ServiceProduct/ServiceProduct";
import BG_Principal from "../../../assets/images/BackGrounds/BG_Principal.mp4";
import "./Home.scss";

export const Home = () => {
  const { PaginaHome } = useSelector((state) => state.lenguage);

  return (
    <div>
      <div id="Home" className="custom-content-section">
        <video autoPlay loop muted>
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
      <AboutUs />
      <div className="custom-separator" />
      <ServiceProduct />
      <div className="custom-separator" />
      <Partners />
      <div className="custom-separator" />
      <ChooseUs />
      <div className="custom-separator" />
    </div>
  );
};
