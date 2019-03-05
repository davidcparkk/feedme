import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SourcesIndexItem from './sources_index_item';
import FeedsIndexItem from '../feeds/feeds_index_item';

class SourceShow extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    let personalFeeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    })
    
    return (
      <div className='margin-bottom-show'>
        
        <div className='display-container'>
          <h2>{this.props.source.source_name}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
        </div>

        <div className='margin-bottom-show-list'>

          <Link to='/feeds'>All</Link>
          <ul>
            {personalFeeds}
          </ul>
            
        </div>
          
      </div>
      
      
    )
  }
}

export default withRouter(SourceShow);