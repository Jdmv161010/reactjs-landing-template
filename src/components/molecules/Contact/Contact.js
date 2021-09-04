import React from "react";
import "./Contact.scss";

export const Contact = () => {
  return (
    <>
      <div id="Contact" className="custom-content-section">
        <div className="custom-contact-info" style={{ flex: 1 }}>
          <span className="custom-contact-title">Intelecto S.A.S.</span>
          <span className="custom-contact-location">
            Contacto: (+57) 3147943431
            <br />
            Dirección: Calle 10 #4-40 Oficina 1001, Edificio Bolsa de Occidente.
            <br />
            Cali, Valle del Cauca, Colombia
          </span>
        </div>
        <div className="custom-contact-info" style={{ flex: 1 }}>
          <span className="custom-contact-title">Enlaces de interes</span>
        </div>
        <div className="custom-contact-info" style={{ flex: 1 }}>
          <span className="custom-contact-title">Siguenos</span>
          <div>ICONOS</div>
          <span className="custom-contact-location">
            Política de privacidad
          </span>
        </div>
      </div>
      <span className="custom-copyright">
        Copyright © 2020 Intelecto - Todos los derechos reservados.
      </span>
    </>
  );
};
