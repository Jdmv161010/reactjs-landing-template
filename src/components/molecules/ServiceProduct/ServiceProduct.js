import React from "react";
import { Link } from "react-router-dom";
import "./ServiceProduct.scss";

export const ServiceProduct = () => {
  const services = [1, 2, 3, 4];

  const staticsCard = () => (
    <div className="custom-card">
      <div className="custom-card-img" style={{ flex: 1 }}>
        <div className="img"></div>
      </div>
      <div className="custom-card-content" style={{ flex: 3 }}>
        <span style={{ fontWeight: 600, textAlign: "left", color: "black" }}>
          Lorem Ipsum
        </span>
        <span style={{ width: "95%", textAlign: "justify", color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit
          efficitur nisl, in mattis odio posuere non. Quisque sagittis nisl
          sapien, ac fringilla nisi tristique non. Sed vitae feugiat odio,
          vulputate cursus mi.
        </span>
      </div>
    </div>
  );

  return (
    <div id="ServiceProduct">
      <div className="custom-content-section" style={{ height: "600px" }}>
        <div className="custom-header-content">
          <span className="custom-title-span">Servicios y productos</span>
          <span className="custom-subtitle-span">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur. <Link to="/services-products">Ver más</Link>
          </span>
        </div>

        <div className="custom-card-container" style={{ flexWrap: "wrap" }}>
          {services.map(() => staticsCard())}
        </div>
      </div>
    </div>
  );
};
