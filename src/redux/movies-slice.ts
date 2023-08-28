import {Dispatch, createSlice} from '@reduxjs/toolkit';
import MoviesSliceState from '../interfaces/movies-slice-state';
import axios from 'axios';
import api_properties from '../config/api';
import Movie from '../interfaces/movie';

const initialState: MoviesSliceState = {
  items: [],
  isLoading: false,
  isErrorHappend: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setAllMovies(state, action) {
      const movies = action.payload;
      return {...state, items: movies};
    },
    setIsLoading: (state, action) => {
      const isLoading = action.payload;
      return {...state, isLoading};
    },
    setIsErrorHappend: (state, action) => {
      const isErrorHappend = action.payload;
      return {...state, isErrorHappend};
    },
  },
});

export function GetAllMovies() {
  return async (dispatch: any) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.get(api_properties.API_URL);
      dispatch(setAllMovies(response.data.results));
    } catch (error) {
      dispatch(setIsErrorHappend(true));
    }
    dispatch(setIsLoading(false));
  };
}

export const selectMovieById = (movies: Movie[], movieId: number) => {
  return movies.find(movie => movie.id === movieId);
};

export const {setAllMovies, setIsErrorHappend, setIsLoading} =
  moviesSlice.actions;

export default moviesSlice;
