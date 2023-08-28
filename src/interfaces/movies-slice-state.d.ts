import Movie from './movie';

interface MoviesSliceState {
  items: Movie[];
  isLoading: boolean;
  isErrorHappend: boolean;
}

export default MoviesSliceState;
