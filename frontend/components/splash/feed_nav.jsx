
import React from 'react';
import { Link } from 'react-router-dom';
import FeedsIndexItemContainer from '../feeds/feeds_index_item_container';

class FeedNav extends React.Component {
  SplashPage () {
    return (
      <div className='landing'>
        
        </div>
    );
  }
  componentDidMount () {
    this.props.fetchFeeds();
    // this.props.fetchSources();
  }
  
  SignedInPage(){
    
    let personalFeeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItemContainer 
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
                <div className='nav-bar-feeds'>
                  <Link to='/feeds' >All</Link>
                  <div className='icon'></div>
                </div>
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