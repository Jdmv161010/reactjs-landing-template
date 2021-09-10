import React from "react";
import BingMapsReact from "bingmaps-react";
import { Carousel } from "../../molecules/Carousel/Carousel";

export const Contact = () => {
  return (
    <div className="custom-container">
      {/* <Carousel /> */}
      <BingMapsReact
        bingMapsKey="AmN3jZxAlbTHAQzmy5ondBHzpwgHTXmnbxCOEYPsJysWjexkownz6VJpu_NzQ0cR"
        height="500px"
        mapOptions={{
          navigationBarMode: "square",
        }}
        width="500px"
        viewOptions={{
          center: { latitude: 3.4741799613928137, longitude: -76.52160245975595 },
          // mapTypeId: "grayscale", 
        }}
        />
    </div>
  );
};
