import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./authSlice";
import navReducer from "./features/navigation/Navigation/navSlice";
import gamesReducer from "./features/games/gamesSlice";
import resultsReducer from "./features/results/resultsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    games: gamesReducer,
    results: resultsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;