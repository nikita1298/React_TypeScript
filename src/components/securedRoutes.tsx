import React from "react";
import { Redirect, Route } from "react-router-dom";
import { valiadteToken } from "../util/utils";

// eslint-disable-next-line react/prop-types
function PrivateRoute ({ component: Component, ...rest }:any) {
  return (
    <>
      <Route
        {...rest}
        render={props =>
          valiadteToken()
            ? (
            <Component {...props} />
              )
            : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
              )
        }
      />
    </>
  );
}

export default PrivateRoute;
