import axios from "axios";
import { allmovies } from "./Types";
export const Allmovies = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=872b6f6702d22707bd5586523dc92a11&language=ar-US"
    );
    console.log(res);
    dispatch({
      type: allmovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const Allmoviessearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=872b6f6702d22707bd5586523dc92a11&query=${word}&language=ar&page=1&include_adult=false`
    );
    console.log(res);
    dispatch({
      type: allmovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
