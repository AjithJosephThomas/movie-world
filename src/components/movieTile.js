import React from 'react';
import Capsule from './Capsule';
import moment from "moment";
import { Link } from "react-router-dom";
 const MovieTile =({data}) =>(
  <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 movieTile">
    <Link to={`/movie/${data.id}`}>
      <div className="panel panel-default">
        <figure className="panel-body">
        <Capsule value={data.vote_average*10}/>
            <img className="posterImage" src={`http://image.tmdb.org/t/p/w200/${data.poster_path}`} />
             <figcaption>
               <h5>{data.title}</h5>
               <h6>{moment(data.release_date,'YYYY-MM-DD').format('MMMM YYYY')}</h6>
             </figcaption>
        </figure>
      </div>
    </Link>
  </div>);
export default MovieTile
