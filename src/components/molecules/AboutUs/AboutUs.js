import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.scss";

export const AboutUs = () => {
  const statics = [1, 2, 3, 4, 5];

  const staticsCard = () => (
    <div className="custom-card">
      <div className="custom-card-img"></div>
      <span className="custom-card-value">96</span>
      <span>Premio 1</span>
    </div>
  );
  const staticsCard2 = () => (
    <div className="custom-card">
      <div className="custom-card-img">
      </div>
      <span className="custom-card-value">96</span>
      <span>Premio 2</span>
    </div>
  );
  const staticsCard3 = () => (
    <div className="custom-card">
      <div className="custom-card-img">
      </div>
      <span className="custom-card-value">96</span>
      <span>Premio 3</span>
    </div>
  );
  const staticsCard4 = () => (
    <div className="custom-card">
      <div className="custom-card-img">
      </div>
      <span className="custom-card-value">96</span>
      <span>Premio 4</span>
    </div>
  );
  const staticsCard5 = () => (
    <div className="custom-card">
      <div className="custom-card-img">
      </div>
      <span className="custom-card-value">96</span>
      <span>Premio 4</span>
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
        {staticsCard()}
        {staticsCard2()}
        {staticsCard3()}
        {staticsCard4()}
        {staticsCard5()}
      </div>
    </div>
  );
};
