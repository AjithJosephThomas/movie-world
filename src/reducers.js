import {combineReducers} from 'redux';
import movieDetails from './modules/movieDetails/reducer';
import movies from './modules/movies/reducer';
export default combineReducers({ movies, movieDetails});
