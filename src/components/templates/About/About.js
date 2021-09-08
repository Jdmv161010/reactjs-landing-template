import React from "react";
import "./About.scss";

export const About = () => {
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
    <div id="About" className="custom-about-container">
      <div
        className="custom-content-section"
        style={{ margin: "0 !important", height: "70vh" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">Acerca de nosotos</span>
        </div>
      </div>

      <div id="AboutSection1" className="custom-content-section">
        <div className="custom-row">
          <div className="custom-image-container">imagen</div>
          <div className="custom-content" style={{ flex: "0.7" }}>
            <span
              className="custom-title-span"
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              Titulo
            </span>
            <span className="custom-subtitle-span">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </span>
          </div>
        </div>
        <div className="custom-row">
          <div className="custom-content" style={{ flex: "0.7" }}>
            <span
              className="custom-title-span"
              style={{ textAlign: "center", marginBottom: "15px" }}
            >
              Titulo
            </span>
            <span className="custom-subtitle-span">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </span>
          </div>
          <div className="custom-image-container">imagen</div>
        </div>
        <div className="custom-card-container">
          {statics.map(({ title, detail }) => staticsCard(title, detail))}
        </div>
      </div>
    </div>
  );
};
