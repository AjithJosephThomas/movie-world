import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchMoviesForKeyword} from './actions';
import SearchFilter from '../../components/searchFilter';
import MovieResult from '../../components/movieResults';
const Movies =({keyword, page, result, total_pages, searchMoviesForKeyword})=>(
  <div>
    <div className="main-header"></div>
    <div className="row">
         <SearchFilter className="col-md-12" keyword={keyword} onChange={(val)=>searchMoviesForKeyword(val)} />
         <div className="col-md-12">
         {keyword&&keyword.length?<h3>Results</h3>:<h3>Popular Movies</h3>}
         </div>
         <MovieResult className="col-md-12" total_pages={total_pages} page={page} result={result} onLoadMore={()=>{
           if(page<total_pages){
             searchMoviesForKeyword(keyword,page+1,false);
           }
         }}
         componentReady={()=>{
             searchMoviesForKeyword(keyword);
         }} />
   </div>
 </div>
);

const mapStateToProps = (state, props) =>{
  const {movies} = state;
  let {keyword, page, result, total_pages} = movies;
   keyword = props.match.params.keyword?props.match.params.keyword:keyword;
  return {keyword, page, result, total_pages};
};
const mapDispatchToProps = (dispatch) => (bindActionCreators({searchMoviesForKeyword},dispatch));
export default connect(mapStateToProps,mapDispatchToProps)(Movies);
