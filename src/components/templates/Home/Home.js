import React from "react";
import item from "../../../assets/images/item.png";
import { Carousel } from "../../molecules/Carousel/Carousel";
import "./Home.scss";

export const Home = () => {
  return (
    <div id="Home" className="custom-home-container">
      <div
        id="Section1"
        className="custom-content-section"
        style={{ height: "70vh" }}
      >
        <span className="custom-title-span">
          Aplicaciones empresariales que transforman su negocio
        </span>

        <span className="custom-subtitle-span">
          Simplificación y conexión de procesos empresariales y mejoramiento de
          las interacciones y relaciones con sus clientes
        </span>
      </div>
      <div
        id="Section2"
        className="custom-content-section"
        style={{ height: "100%", padding: "50px" }}
      >
        <div className="custom-content-section2">
          <span className="custom-title-span">Acerca de nosotos</span>
          <span style={{ margin: "20px auto 40px auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at leo
            egestas, ullamcorper felis vitae, tristique lorem. Aenean sit amet
            mi nibh. Integer et turpis accumsan, porta felis ut, sollicitudin
            sem. Suspendisse interdum ultrices ex nec ultrices. Nunc ornare
            rhoncus pretium.
          </span>
        </div>
        <div className="custom-card-container">
          <div className="custom-static-card">
            <div className="custom-img-card">
              {/* <img src={item} alt="item" /> */}
            </div>
            <span>96</span>
            <span>lorem</span>
          </div>
          <div className="custom-static-card">
            <div className="custom-img-card">
              {/* <img src={item} alt="item" /> */}
            </div>
            <span>96</span>
            <span>lorem</span>
          </div>
          <div className="custom-static-card">
            <div className="custom-img-card">
              {/* <img src={item} alt="item" /> */}
            </div>
            <span>96</span>
            <span>lorem</span>
          </div>
          <div className="custom-static-card">
            <div className="custom-img-card">
              {/* <img src={item} alt="item" /> */}
            </div>
            <span>96</span>
            <span>lorem</span>
          </div>
          <div className="custom-static-card" style={{ border: "none" }}>
            <div className="custom-img-card">
              {/* <img src={item} alt="item" /> */}
            </div>
            <span>96</span>
            <span>lorem</span>
          </div>
        </div>
      </div>
      <div id="Section3" className="custom-content-section">
        Servidios
      </div>
      <div id="Section4" className="custom-content-section">
        Partners
      </div>
      <div id="Section5" className="custom-content-section">
        Contacto
      </div>
    </div>
  );
};
