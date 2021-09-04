import React from "react";
import { Link } from "react-router-dom";
import "./ServiceProduct.scss";

export const ServiceProduct = () => {
  const services = [1, 2, 3, 4];

  const staticsCard = () => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <div className="custom-card-content" style={{ flex: 1 }}>
        <span style={{ fontWeight: 600 }}>Lorem Ipsum</span>
        <span style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit
          efficitur nisl, in mattis odio posuere non. Quisque sagittis nisl
          sapien, ac fringilla nisi tristique non. Sed vitae feugiat odio,
          vulputate cursus mi.
        </span>
      </div>
    </div>
  );

  return (
    <div id="ServiceProduct" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">Servicios y productos</span>
        <span className="custom-subtitle-span">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur. <Link to="/services-products">Ver más</Link>
        </span>
      </div>

      <div className="custom-card-container">
        {services.map(() => staticsCard())}
      </div>
    </div>
  );
};

// style={{ flexWrap: "wrap" }}
