import {MOVIE_SEARCH_REQUEST, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS} from '../../actiontypes';
import { RSAA } from 'redux-api-middleware';

export const searchMoviesForKeyword=(keyword='',page=1, isNewKeyword=true)=>{
  let url;
  if(keyword){
    url =`search/movie?query=${keyword}&page=${page}`
  }else{
    url =`movie/popular?sort_by=popularity.desc&page=${page}`;
  }
  return {
    [RSAA]: {
     types: [{type:MOVIE_SEARCH_REQUEST, payload:{keyword}}, {type:MOVIE_SEARCH_SUCCESS, payload: (action, state, response) => {
            return response.json().then(rawData => {
              const {page, results,total_pages} = rawData;
              const result = results.map(({id, title, poster_path, release_date, vote_average})=> ({id, title, poster_path, release_date, vote_average}));
              return {result, page, total_pages,isNewKeyword};
            });
          }
        }, MOVIE_SEARCH_FAILURE],
     endpoint: `https://api.themoviedb.org/3/${url}&language=en-US&api_key=6ed12e064b90ae1290fa326ce9e790ff`,
     method: 'GET'
   }
 };
}
