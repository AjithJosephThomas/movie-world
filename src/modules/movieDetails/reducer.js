import {MOVIE_GET_REQUEST, MOVIE_GET_FAILURE, MOVIE_GET_SUCCESS} from '../../actiontypes';
const INITIAL_STATE = {id:'',isMovieLoading:false,backdrop_path:'', title:'',vote_average:'', overview:'',runtime:'', release_date:'', poster_path:''};
function movieDetails(state =INITIAL_STATE,action){
  const {type, payload} = action;
  switch (type) {
    case MOVIE_GET_REQUEST:
    return {...state,isMovieLoading:true};
    case MOVIE_GET_SUCCESS:
      const {id, backdrop_path, title,vote_average, overview,runtime, release_date, poster_path} = payload;
    return {...state, id, backdrop_path, title, vote_average, overview, runtime, release_date, poster_path, isMovieLoading:false};
    default:
    return state;
  }
}
export default movieDetails;
