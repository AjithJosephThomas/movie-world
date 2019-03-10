import React, {PureComponent} from 'react';
import MovieTile from './movieTile';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroller';

class MovieResult extends PureComponent{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.componentReady();
  }
  render(){
    const { result, page, total_pages, onLoadMore} = this.props;
    return <InfiniteScroll
        pageStart={0}
        loadMore={()=>{onLoadMore()}}
        hasMore={page<total_pages}
        loader={<Loader key={0} />}
        useWindow={true}
    >
      {result.map(item=>(<MovieTile key={item.id} data={item} />))}
     </InfiniteScroll>;
  }

}


export default MovieResult;
