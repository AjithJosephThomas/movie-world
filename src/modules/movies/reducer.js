import {MOVIE_SEARCH_REQUEST, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS} from '../../actiontypes';
const INITIAL_STATE = {result :[], total_pages:0, page:0, isMoviesLoading:true, keyword:''};
function movies(state =INITIAL_STATE,action){
  const {type, payload} = action;
  switch (type) {
    case MOVIE_SEARCH_REQUEST:
      const {keyword} = payload;
      return { ...state,keyword, isMoviesLoading:true};
    break
    case MOVIE_SEARCH_SUCCESS:
      const { result, total_pages, page ,isNewKeyword} = payload;
      //refresh the array if it is a new search otherwise merge
      if(!isNewKeyword){
        const newResult = [...state.result,...result];
        return { ...state, result:newResult, total_pages, page, isMoviesLoading:false };
      }else{
        return { ...state, result, total_pages, page, isMoviesLoading:false };
      }

    case MOVIE_SEARCH_FAILURE:
      return { ...state, isMoviesLoading:false};
    default:
    return state;
  }
}
export default movies;
