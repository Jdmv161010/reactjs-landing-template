import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/atoms/Navbar/Navbar";
import { Landing } from "../components/templates/Landing/Landing";

export const AppRouter = () => {
  const options = [
    { route: "/about", label: "Acerca de nosotros" },
    { route: "/products-services", label: "Productos y servicios" },
    { route: "/contact", label: "Contáctenos" },
  ];
  return (
    <Router>
      <Navbar options={options} />
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Landing {...props} src={"/"} routes={options} />
            )}
          />
          {options.map(({ route }) => (
            <Route
              exact
              key={route}
              path={route}
              render={(props) => (
                <Landing {...props} src={route} routes={options} />
              )}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};
