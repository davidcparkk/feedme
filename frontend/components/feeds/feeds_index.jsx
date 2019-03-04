import React from 'react';
import FeedsIndexItem from './feeds_index_item';
import AllFeedsIndexItem from './all_feeds_index_item';
import CreateFormContainer from './feeds_form_container';
import {Link} from 'react-router-dom';

class FeedsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
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

    let allFeeds = this.props.feeds.map(feed=> {
      return(
        <AllFeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    })
    
    return(
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
              <Link to='/feeds'>Create Feed</Link>
            </div>
            <div className='separator'></div>
            <button className='add-content'>Add Content</button>
          </div>
        </div>
        <div className='display-container'>
          <h2>All</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>LATEST</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <ul>
            {allFeeds}
          </ul>
        </div>
      </div>
    )
  }
}

export default FeedsIndex;