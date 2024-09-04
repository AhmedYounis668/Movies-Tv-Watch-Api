import { allmovies } from "./Types";

const intialvalue = {
  movies: [],
  pagecount: 0,
};
const MoviesReducers = (state = intialvalue, action) => {
  switch (action.type) {
    case allmovies:
      return {
        movies: action.data,
        pagecount: action.pages,
      };
    default:
      return state;
  }
};

export default MoviesReducers;
