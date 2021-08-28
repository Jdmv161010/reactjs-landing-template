import React, { useState } from "react";
import carousel1 from "../../../assets/images/carousel1.jpg";
import carousel2 from "../../../assets/images/carousel2.jpg";
import carousel3 from "../../../assets/images/carousel3.jpg";
import "./Carousel.scss";

export const Carousel = () => {
  const data = [
    {
      id: 0,
      source: carousel1,
      alt: "Image1",
    },
    {
      id: 1,
      source: carousel2,
      alt: "Image2",
    },
    {
      id: 2,
      source: carousel3,
      alt: "Image3",
    },
  ];

  const [carousel, setCarousel] = useState(data[0]);

  const handleChangePrev = () => {
    const index = data.findIndex((item) => item.id === carousel.id);
    setCarousel(data[index === 0 ? 2 : index - 1]);
  };

  const handleChangeNext = () => {
    const index = data.findIndex((item) => item.id === carousel.id);
    setCarousel(data[index === 2 ? 0 : index + 1]);
  };

  setTimeout(() => {
    handleChangeNext();
  }, 5000);

  return (
    <>
      <div className="container-fluid custom-carousel-container">
        <div className="custom-carousel-image">
          <img
            src={carousel.source}
            alt={carousel.alt}
            style={{ width: "100%" }}
          />
          <div className="custom-carousel-dots">
            <span className="dot" onClick={() => setCarousel(data[0])} />
            <span className="dot" onClick={() => setCarousel(data[1])} />
            <span className="dot" onClick={() => setCarousel(data[2])} />
          </div>
        </div>
      </div>
    </>
  );
};
