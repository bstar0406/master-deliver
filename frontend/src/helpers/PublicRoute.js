import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/console"} />
        )
      }
    />
  );
};


export default PublicRoute