import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NewUserForm from "./components/Users/NewUserForm";
import Games from "./components/Games/Games";
import NewResultForm from "./components/Results/NewResultForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ResultsTable from "./components/Results/ResultsTable";
import UsersStats from "./components/Users/UsersStats";
import Stats from "./components/Stats/Stats";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const AuthContext = React.createContext();

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    const isUserInLocalStorage = localStorage.getItem("user") !== null;
    userHasAuthenticated(isUserInLocalStorage);
  }, []);

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem("user");
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
        <Navigation
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
        <div className="appContainer">
          <Route exact path="/" component={ResultsTable} />
          <PrivateRoute path="/createresult" component={NewResultForm} />
          <PrivateRoute path="/games" component={Games} />
          <PrivateRoute path="/results" component={ResultsTable} />
          <PrivateRoute
            path="/statystyki-uzytkownikow"
            component={UsersStats}
          />
          <Route path="/statystyki" component={Stats} />
          <Route path="/users" component={NewUserForm} />
          <Route path="/signup" component={LoginForm} />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
