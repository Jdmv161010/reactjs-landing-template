import React from "react";
import BingMapsReact from "bingmaps-react";
import { makeStyles, MenuItem, TextField } from "@material-ui/core";
import "./Contact.scss";

const useStyles = makeStyles(() => ({
  root: {
    background: "rgba(0,0,0,0.8)",
    color: "#ffffff",
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div id="ContactLanding" className="custom-contact-container">
      <div
        className="custom-content-section"
        style={{ margin: "0 !important", height: "auto" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">Contáctenos</span>
        </div>

        <div id="ContactSection1" className="custom-content-section">
          <span className="custom-subtitle-span" style={{ width: "60%" }}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </span>

          <div className="auxcontact">
            <div className="custom-row">
              <BingMapsReact
                bingMapsKey="AmN3jZxAlbTHAQzmy5ondBHzpwgHTXmnbxCOEYPsJysWjexkownz6VJpu_NzQ0cR"
                width="600px"
                height="600px"
                mapOptions={{
                  navigationBarMode: "square",
                }}
                viewOptions={{
                  center: {
                    latitude: 3.4741799613928137,
                    longitude: -76.52160245975595,
                  },
                  // mapTypeId: "grayscale",
                }}
              />

              <div className="custom-form-section">
                <span
                  className="custom-title-span"
                  style={{ fontSize: "25px" }}
                >
                  Comunícate con nosotros
                </span>
                <div className="custom-form">
                  <TextField
                    style={{ width: "100%", marginBottom: "15px" }}
                    label="Nombre"
                    variant="filled"
                    InputProps={{
                      classes: { ...classes },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "rgb(0,175,239)",
                      },
                    }}
                  />

                  <TextField
                    style={{ width: "100%", marginBottom: "15px" }}
                    label="Número Telefónico"
                    variant="filled"
                    InputProps={{
                      classes: { ...classes },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "rgb(0,175,239)",
                      },
                    }}
                  />
                  <TextField
                    style={{ width: "100%", marginBottom: "15px" }}
                    label="Email"
                    variant="filled"
                    InputProps={{
                      classes: { ...classes },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "rgb(0,175,239)",
                      },
                    }}
                  />
                  <TextField
                    select
                    style={{ width: "100%", marginBottom: "15px" }}
                    label="Asunto"
                    variant="filled"
                    InputProps={{
                      classes: { ...classes },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "rgb(0,175,239)",
                      },
                    }}
                    SelectProps={{
                      MenuProps: {
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left",
                        },
                        getContentAnchorEl: null,
                      },
                    }}
                  >
                    <MenuItem className="custom-dropdown-item">
                      Opcion1
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      Opcion2
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      Opcion3
                    </MenuItem>
                  </TextField>

                  <TextField
                    style={{ width: "100%" }}
                    multiline
                    rows={6}
                    label="Mensaje"
                    variant="filled"
                    InputProps={{
                      classes: { ...classes },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "rgb(0,175,239)",
                      },
                    }}
                  />
                </div>
                <button className="custom-button-field">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
