import { takeLatest, call, put, debounce } from "redux-saga/effects";
import { getNewGameDetails, getGames, getNewGamesFromQuery, getLastResultsOfEachGames, getNumberOfResultsPerGame } from "../../proxy/api";
import {
  fetchGames,
  fetchNewGamesByQuery,
  fetchError,
  fetchNewGamesByQuerySuccess,
  fetchGamesSuccess,
  fetchNewGameDetails,
  fetchNewGameDetailsSuccess
} from "./gamesSlice";

function* fetchGamesHandler({ payload }) {
  try {
    const games = yield call(getGames);
    if (!payload?.withoutStats) {
      const lastResults = yield call(getLastResultsOfEachGames);
      const numberOfResults = yield call(getNumberOfResultsPerGame);
      const updatedGames = yield games.map(game => (
        {
          ...game,
          lastResultDate: lastResults.find(({ _id }) => _id === game._id)?.lastGameDate,
          numberOfResults: numberOfResults.find(({ _id }) => _id === game._id)?.numberOfResults,
        }))
      yield put(fetchGamesSuccess(updatedGames));
    } else {
      yield put(fetchGamesSuccess(games));
    }
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

function* fetchNewGameDetailsHandler({ payload: gameId }) {
  try {
    const newGameDetails = yield call(getNewGameDetails, gameId);
    yield put(fetchNewGameDetailsSuccess(newGameDetails));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

function* fetchNewGamesByQueryHandler({ payload: query }) {
  try {
    const games = yield call(getNewGamesFromQuery, query);
    yield put(fetchNewGamesByQuerySuccess(games));
  } catch (error) {
    yield call(alert, "Nie udało się wczytać gier, spróbuj odświeżyć stronę.");
    yield put(fetchError());
  }
}

export function* watchFetchGames() {
  yield takeLatest(fetchGames.type, fetchGamesHandler);
  yield takeLatest(fetchNewGameDetails.type, fetchNewGameDetailsHandler);
  yield debounce(500, fetchNewGamesByQuery.type, fetchNewGamesByQueryHandler);
};