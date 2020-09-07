import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/rejestracja",
                state: { from: props.location, alert: "Wymagane logowanie." },
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
