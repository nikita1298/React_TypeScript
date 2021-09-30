import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routeConstants";
import PrivateRoute from "../components/securedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Routes () {
  return (
    <>
      <ToastContainer />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {publicRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))}

          {privateRoutes.map((item, index) => (
            <PrivateRoute key={index} {...item} />
          ))}

          <Route render={() => <Redirect to="/Error" />} />
        </Switch>
      </Router>
    </>
  );
}
