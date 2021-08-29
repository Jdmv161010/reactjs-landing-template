import React from "react";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { ProductsServices } from "../ProductsServices/ProductsServices";
import { Contact } from "../Contact/Contact";

export const Landing = ({ src }) => {
  {
    switch (src) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/services-products":
        return <ProductsServices />;
      case "/contact":
        return <Contact />;
      default:
        break;
    }
  }
};
