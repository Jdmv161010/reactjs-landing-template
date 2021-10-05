import React from "react";
import { ReactBingmaps } from "react-bingmaps";
import { makeStyles, MenuItem, TextField } from "@material-ui/core";
import "./Contact.scss";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    background: "rgba(0,0,0,0.8)",
    color: "#ffffff",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const { Contact } = useSelector((state) => state.lenguage);

  return (
    <div id="ContactLanding" className="custom-contact-container">
      <div
        className="custom-content-section"
        style={{ margin: "0 !important", height: "auto" }}
      >
        <div className="custom-header-content">
          <span className="custom-title-span">{Contact.titulo}</span>
        </div>

        <div id="ContactSection1" className="custom-content-section">
          <span className="custom-subtitle-span" style={{ width: "60%" }}>
            {Contact.item1}
          </span>

          <div className="auxcontact">
            <div className="custom-row">
              <ReactBingmaps
                bingmapKey="AmN3jZxAlbTHAQzmy5ondBHzpwgHTXmnbxCOEYPsJysWjexkownz6VJpu_NzQ0cR"
                center={[3.451166456952944, -76.53365181503032]}
                mapTypeId={"road"}
                navigationBarMode={"compact"}
                supportedMapTypes={["road", "canvasDark"]}
                heading={180}
                zoom={16}
                disableStreetside={true}
                pushPins={[
                  {
                    location: [3.451166456952944, -76.53365181503032],
                    option: {
                      color: "rgb(0, 175, 239)",
                      title: "INTELECTO SAS",
                    },
                    addHandler: { type: "click" },
                  },
                ]}
              ></ReactBingmaps>

              <div className="custom-form-section">
                <span
                  className="custom-title-span"
                  style={{ fontSize: "25px" }}
                >
                  {Contact.tituloForm}
                </span>
                <div className="custom-form">
                  <TextField
                    style={{ width: "100%", marginBottom: "15px" }}
                    label={Contact.form1}
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
                    label={Contact.form2}
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
                    label={Contact.form3}
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
                    label={Contact.form4}
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
                      {Contact.asunto1}
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      {Contact.asunto2}
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      {Contact.asunto3}
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      {Contact.asunto4}
                    </MenuItem>
                    <MenuItem className="custom-dropdown-item">
                      {Contact.asunto5}
                    </MenuItem>
                  </TextField>

                  <TextField
                    style={{ width: "100%" }}
                    multiline
                    rows={6}
                    label={Contact.form5}
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
                <button className="custom-button-field">{Contact.boton}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
