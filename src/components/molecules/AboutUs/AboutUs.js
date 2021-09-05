import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.scss";

export const AboutUs = () => {
  const statics = [
    { title: "Microsoft Dynamics CRM", detail: "Colombia" },
    { title: "Microsoft Dynamics CRM", detail: "Latinoamérica y Caribe" },
    { title: "Microsoft", detail: "Gold Partner" },
    {
      title: "Microsoft Seguridad",
      detail: "Sector Público y Seguridad Nacional",
    },
    { title: "Microsoft Consulting Services", detail: "Colombia" },
  ];

  const staticsCard = (title, detail) => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <span className="custom-card-value">{title}</span>
      <span>{detail}</span>
    </div>
  );
  return (
    <div id="AboutUs" className="custom-content-section">
      <div className="custom-header-content">
        <span className="custom-title-span">Acerca de nosotos</span>
        <span className="custom-subtitle-span" style={{ width: "70%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at leo
          egestas, ullamcorper felis vitae, tristique lorem. Aenean sit amet mi
          nibh. Integer et turpis accumsan, porta felis ut, sollicitudin sem.
          Suspendisse interdum ultrices ex nec ultrices. Nunc ornare rhoncus
          pretium. <Link to="/about">Ver más</Link>
        </span>
      </div>

      <div className="custom-card-container">
        {statics.map(({ title, detail }) => staticsCard(title, detail))}
      </div>
    </div>
  );
};
