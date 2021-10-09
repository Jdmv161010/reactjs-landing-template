import React from "react";
import { useSelector } from "react-redux";
import Cali from "../../../assets/images/BackGrounds/Cali_City.mp4";
import "./About.scss";

export const About = () => {
  const { About } = useSelector((state) => state.lenguage);

  const services = [
    {
      title: About.tituloPremio1,
      detail: About.detallePremio1,
    },
    {
      title: About.tituloPremio2,
      detail: About.detallePremio2,
    },
    {
      title: About.tituloPremio3,
      detail: About.detallePremio3,
    },
    {
      title: About.tituloPremio4,
      detail: About.detallePremio4,
    },
    {
      title: About.tituloPremio5,
      detail: About.detallePremio5,
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
          <span className="custom-title-span">{About.titulo}</span>
        </div>
      </div>

      <div id="AboutSection1" className="custom-content-section">
        <div className="custom-row">
          <div className="custom-video-container">
            <video
              className="video"
              preload="auto"
              autoPlay={true}
              loop="loop"
              aria-hidden={true}
              playsInline={true}
              muted
              volume="0"
              width="600"
              height="auto"
            >
              <source src={Cali} type="video/mp4" />
            </video>
          </div>
          <div className="custom-content" style={{ flex: "0.9" }}>
            <span
              className="custom-subtitle-span"
              dangerouslySetInnerHTML={{
                __html: About.item1,
              }}
            ></span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "0.9" }}>
            <span
              className="custom-subtitle-span"
              dangerouslySetInnerHTML={{
                __html: About.item2,
              }}
            ></span>
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
