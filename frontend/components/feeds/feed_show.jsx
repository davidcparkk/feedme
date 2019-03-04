import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';


class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchFeeds();
  }

  render() {
    let personalFeeds = this.props.currentUserFeeds.map(feed=> {
      return(
        <FeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    })

    return (
      <div className='feedsIndex'>
        <div className="feedmeTabsHolder">
          <div className='margin-bottom'>
            <div className='pin-button'></div>
            <div className='today-button'>Today
            </div>
            <div className='separator'></div>
            <div className='personal-feed'>Personal Feeds
              <div className='tab'>
              <Link to='/feeds'>All</Link>
                <div className='icon'></div>
              </div>
              <div className='tab'>Favorites
                <div className='icon'></div>
              </div>
              <ul>
                {personalFeeds}
              </ul>
            </div>
            <div className='tab'>
              <Link to='/feeds/new'>Create Feed</Link>
            </div>
            <div className='separator'></div>
            <button className='add-content'>Add Content</button>
          </div>
        </div>
        <div className='display-container'>
          <h2>{this.props.feed.feed_title}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
        </div>
      </div>
    )
  }
}

export default withRouter(FeedShow);