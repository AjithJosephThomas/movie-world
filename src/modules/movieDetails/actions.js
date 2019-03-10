import {MOVIE_GET_REQUEST, MOVIE_GET_SUCCESS, MOVIE_GET_FAILURE} from '../../actiontypes';
import { RSAA } from 'redux-api-middleware';

export const searchMovieById=(id)=>{
  return {
    [RSAA]: {
     types: [MOVIE_GET_REQUEST, {type:MOVIE_GET_SUCCESS, payload: (action, state, response) => {
            return response.json().then(rawData => {
              const {id, backdrop_path, title,vote_average, overview,runtime, release_date, poster_path} = rawData;
              return {id, backdrop_path, title,vote_average, overview,runtime, release_date, poster_path};
            });
          }
        }, MOVIE_GET_FAILURE],
     endpoint: `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=6ed12e064b90ae1290fa326ce9e790ff`,
     method: 'GET'
   }
 };
}
