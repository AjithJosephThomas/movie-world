import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchMovieById} from './actions';
import moment from "moment";
class MovieDetails extends PureComponent{
  constructor(props){
    super(props);
  }
  componentDidMount(){
      this.props.searchMovieById(this.props.id);
  }
  render(){
    const {id, backdrop_path, title, vote_average, overview, runtime, release_date, poster_path, isMovieLoading} = this.props;
    return <div className="movieDetails">
            <div className="col-md-8 col-md-offset-2 text-center">
              <img className="backdrop" src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} />
            </div>
            <div className="title-container">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="col-md-6">
                    <img className="poster" src={`http://image.tmdb.org/t/p/w200/${poster_path}`} />
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-7 pull-right">
              <h2>{title}</h2>
              <h5>{moment(release_date,'YYYY-MM-DD').format('YYYY')} - {(vote_average*10)}% User Score</h5>
              <h5>{moment.utc().startOf('day').add(runtime, 'minutes').format('hh:mm')}</h5>
            </div>
            <div className="clearfix"></div>
            <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <hr/>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
            </div>

          </div>;
  }
}

const mapStateToProps = (state, props) =>{
  const {movieDetails} = state;
  let {id, backdrop_path, title, vote_average, overview, runtime, release_date, poster_path, isMovieLoading} = movieDetails;
   id = props.match.params.id?props.match.params.id:id;
  return {id, backdrop_path, title, vote_average, overview, runtime, release_date, poster_path, isMovieLoading};
};
const mapDispatchToProps = (dispatch) => (bindActionCreators({searchMovieById},dispatch));
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
