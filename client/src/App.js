import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./features/navigation/Navigation"
import NewResultForm from "./features/results/NewResultPage/NewResultForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllUsersTable from "./components/Users/AllUsersTable";
import Stats from "./components/Stats/Stats";
import UserStats from "./components/Users/UserStats";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { toNewResult, toUserStats, toResults, toGames, toUsers, toStats, toLogin, toHomePage, toNewGame, toGameList } from "./routes";
import HomePage from "./features/homepage/HomePage";
import ResultsPage from "./features/results/ResultsPage";
import NewGamePage from "./features/games/NewGamePage";
import GamesPage from "./features/games/GamesPage";
import GameListPage from "./features/games/GameListPage";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Container>
      <Switch>
        <Route path={toResults()} >
          <ResultsPage />
        </Route>
        <Route path={toGameList()}>
          <GameListPage />
        </Route>
        <Route path={toGames()}>
          <GamesPage />
        </Route>
        <Route path={toUsers()}>
          <AllUsersTable />
        </Route>
        <Route path={toStats()}>
          <Stats />
        </Route>
        <Route path={toLogin()}>
          <LoginForm />
        </Route>
        <PrivateRoute path={toNewResult()} component={NewResultForm} />
        <PrivateRoute path={toNewGame()} component={NewGamePage} />
        <PrivateRoute path={toUserStats()} component={UserStats} />
        <Route exact path={toHomePage()}>
          <HomePage />
        </Route>
        <Route>
          <Redirect to={toHomePage()} />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter >
);

export default App;
