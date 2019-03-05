import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';


class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  

  render() {
    let sourcesMap = this.props.feedSourceArr.map(source=> {
      return(
        <li>
          Name: {source.source_name} and Description: {source.description}
        </li>
      )
    })

    return (
      
        <div className='display-container'>
          <h2>{this.props.feed.feed_title}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <ul>{sourcesMap}</ul>
        </div>
      
    )
  }
}

export default withRouter(FeedShow);