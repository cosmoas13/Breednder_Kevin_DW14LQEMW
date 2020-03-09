import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware";
import auth from "../_reducers/auth";
import species from "../_reducers/species";

// Global state
const rootReducers = combineReducers({ auth, species });

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
