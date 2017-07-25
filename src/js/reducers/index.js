import {combineReducers} from 'redux';
import MovieReducer from './movie-reducer.js';
import ActiveMoviReducer from './movie-active-reducer.js';
import DataReducer from './data-reducer.js'
import ActiveDataReducer from './active-data-reducer.js'
const allReducers= combineReducers({
  movies: MovieReducer,
  activeMovie: ActiveMoviReducer,
  data:DataReducer,
  activeData:ActiveDataReducer
});
export default allReducers;
