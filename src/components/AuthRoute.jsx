import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = props => {
  const { isAuth = false, component: Component, ...restProps } = props;

  return (
    <Route
      render={routeProps => {
        if (isAuth) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/sign_in" />;
        }
      }}
      {...restProps}
    />
  );
};

export default AuthRoute;
