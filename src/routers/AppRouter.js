import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "../components/atoms/Button/Button";
import { Navbar } from "../components/atoms/Navbar/Navbar";
import { Contact } from "../components/molecules/Contact/Contact";
import { Landing } from "../components/templates/Landing/Landing";

export const AppRouter = () => {
  const { item1, item2, item3 } = useSelector((state) => state.lenguage.Navbar);

  const options = [
    { route: "/about", label: item1 },
    { route: "/services-products", label: item2 },
    { route: "/contact", label: item3 },
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
      <Contact />
      <Button />
    </Router>
  );
};
