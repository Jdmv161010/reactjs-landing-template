import React, { useState } from "react";
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
  const initState = {
    name: "",
    phone: "",
    email: "",
    affair: "",
    message: "",
  };

  const classes = useStyles();
  const { Contact } = useSelector((state) => state.lenguage);
  const [form, setForm] = useState(initState);

  const handleSubmit = () => {
    console.log(form);
  };

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

          {/* <div className="auxcontact"> */}
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
                    title: "INTELECTO S.A.S.",
                  },
                  addHandler: { type: "click" },
                },
              ]}
            ></ReactBingmaps>

            <div className="custom-form-section">
              <span className="custom-title-span" style={{ fontSize: "25px" }}>
                {Contact.tituloForm}
              </span>
              <div className="custom-form">
                <TextField
                  value={form.name}
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
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <TextField
                  value={form.phone}
                  style={{ width: "100%", marginBottom: "15px" }}
                  label={Contact.form2}
                  type="number"
                  variant="filled"
                  InputProps={{
                    classes: { ...classes },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgb(0,175,239)",
                    },
                  }}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <TextField
                  value={form.email}
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
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <TextField
                  value={form.affair}
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
                    native: true,
                    MenuProps: {
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                  onChange={(e) => setForm({ ...form, affair: e.target.value })}
                >
                  <option
                    value={Contact.asunto1}
                    className="custom-dropdown-item"
                  >
                    {Contact.asunto1}
                  </option>
                  <option
                    value={Contact.asunto2}
                    className="custom-dropdown-item"
                  >
                    {Contact.asunto2}
                  </option>
                  <option
                    value={Contact.asunto3}
                    className="custom-dropdown-item"
                  >
                    {Contact.asunto3}
                  </option>
                  <option
                    value={Contact.asunto4}
                    className="custom-dropdown-item"
                  >
                    {Contact.asunto4}
                  </option>
                  <option
                    value={Contact.asunto5}
                    className="custom-dropdown-item"
                  >
                    {Contact.asunto5}
                  </option>
                </TextField>

                <TextField
                  value={form.message}
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
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <button className="custom-button-field" onClick={handleSubmit}>
                {Contact.boton}
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
