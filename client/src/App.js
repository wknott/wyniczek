import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./features/navigation/Navigation"
import NewResultForm from "./features/results/NewResultPage/NewResultForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllUsersTable from "./components/Users/AllUsersTable";
import Stats from "./components/Stats/Stats";
import UserStats from "./components/Users/UserStats";
import Container from "./common/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  toNewResult,
  toUserStats,
  toResults,
  toGames,
  toUsers,
  toStats,
  toLogin,
  toHomePage,
  toNewGame,
  toGame,
  toNewGameSearch,
  toResult
} from "./routes";
import ResultsPage from "./features/results/ResultsPage";
import NewGameSearchPage from "./features/games/NewGameSearchPage";
import GamesPage from "./features/games/GamesPage";
import GamePage from "./features/games/GamePage";
import NewGamePage from "./features/games/NewGamePage";
import ResultPage from "./features/results/ResultPage";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Container>
      <Switch>
        <PrivateRoute path={toNewResult()} component={NewResultForm} />
        <PrivateRoute path={toNewGameSearch()} component={NewGameSearchPage} />
        <PrivateRoute path={toNewGame()} component={NewGamePage} />
        <PrivateRoute path={toUserStats()} component={UserStats} />
        <Route path={toResult()} >
          <ResultPage />
        </Route>
        <Route path={toResults()} >
          <ResultsPage />
        </Route>
        <Route path={toGame()}>
          <GamePage />
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
        <Route exact path={toHomePage()}>
          <ResultsPage />
        </Route>
        <Route>
          <Redirect to={ResultsPage()} />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter >
);

export default App;
