import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import MoviesReducers from "./Redux/MoviesReducer";

const store = createStore(MoviesReducers, applyMiddleware(thunk));

export default store;
