import React from "react";
import { Link } from "react-router-dom";
import "./ChooseUs.scss";


export const ChooseUs = () => {
  const statics = [1, 2, 3, 4];

  const staticsCard = () => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <span className="custom-card-value">96</span>
      <span>lorem</span>
    </div>
  );

  return (
    <div id="ChooseUs" className="custom-content-section">
      <div className="custom-aux-image-container" style={{ flex: 1 }}>
        <div className="custom-aux-image"></div>
      </div>


      <div className="custom-aux-content" style={{ flex: 2.5 }}>
        <div className="custom-header-content">
          <span className="custom-title-span">¿Por qué escogernos?</span>
          <span
            className="custom-subtitle-span"
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at leo
            egestas, ullamcorper felis vitae, tristique lorem. Aenean sit amet
            mi nibh. Integer et turpis accumsan, porta felis ut, sollicitudin
            sem. Suspendisse interdum ultrices ex nec ultrices. Nunc ornare
            rhoncus pretium. <Link to="/about">Ver más</Link>
          </span>
        </div>

        <div className="custom-card-container">
          {statics.map(() => staticsCard())}
        </div>
      </div>
    </div>
  );
};
