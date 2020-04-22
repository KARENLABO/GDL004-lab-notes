import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        !!currentUser
          ? (<Component {...routeProps} />)
          : (<Redirect to="/SignIn" />)
      )}
    />
  );
};

export default PrivateRoute;
