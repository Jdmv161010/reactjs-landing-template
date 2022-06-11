import React from "react";
import { useSelector } from "react-redux";
import { AboutUs } from "../../molecules/AboutUs/AboutUs";
import { ChooseUs } from "../../molecules/ChooseUs/ChooseUs";
import { Partners } from "../../molecules/Partners/Partners";
import { ServiceProduct } from "../../molecules/ServiceProduct/ServiceProduct";
import Flyer1 from "../../../assets/images/Flyer1.jpg";
import Flyer2 from "../../../assets/images/Flyer2.jpg";
import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  const { PaginaHome } = useSelector((state) => state.lenguage);

  return (
    <div>
      <div id="Home" className="custom-content-section">
        <Carousel fade controls={false}>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Flyer1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Flyer2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
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
