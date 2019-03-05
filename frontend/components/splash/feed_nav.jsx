
import React from 'react';
import { Link } from 'react-router-dom';
import FeedsIndexItem from '../feeds/feeds_index_item';

class FeedNav extends React.Component {
  SplashPage () {
    return (
      <div className='landing'>
        
        </div>
    );
  }
  componentDidMount () {
    this.props.fetchFeeds();
  }
  
  SignedInPage(){
    
    let personalFeeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItem 
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
            <div className='separator-small'></div>
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
            <div className='create-feed-tab'>
            <div className='separator-small'></div>
              <button className='create-button' onClick={() => dispatch(this.props.openModal('feedsForm'))}>Create New Feed</button>
            </div>
            <div className='separator'></div>
            <Link to='/sources' className='add-content'>Add Content</Link>
          </div>
        </div>
      </div>
      
    )
  }

  render (){
    if (this.props.currentUser) {
      return this.SignedInPage();
    } else {
      return this.SplashPage();
    }
  }
  
  
};

export default FeedNav;