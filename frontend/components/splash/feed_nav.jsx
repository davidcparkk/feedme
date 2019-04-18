
import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import FeedsIndexItemContainer from '../feeds/feeds_index_item_container';

class FeedNav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.props.fetchFeeds();
  }
  
  handleClick(){
    this.props.history.push('/articles');
  }

  SignedInPage(){
    let personalFeeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItemContainer 
        key={feed.id}
        feed={feed}
        />
      )
    });
    return(
      <div className="feedmeTabsHolder">
        <div className='personal-feed'>
          <div className="feeds-title">Your Feeds</div>
          <ul>
            <li className="feed-list-item" onClick={() => this.handleClick()}>
              <div className="tab">
                <div className='icon'><img src={window.arrowRightURL} />
                </div>
                <div className='nav-bar-feeds'>
                  All Articles
                  {/* <Link to='/feeds' className="all-feeds">All Feeds</Link> */}
                </div>
              </div>
            </li>
            {personalFeeds}
            <li className="feed-list-item">
              <div className="tab">
                <div className='create-feed-tab'>
                  <div className='create-button' onClick={() => dispatch(this.props.openModal('feedsForm'))}>+  Create New Feed</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <Link to='/sources' className='add-content'>+  ADD CONTENT</Link>
      </div>
    )
  }

  render (){
    if (this.props.currentUser) {
      return this.SignedInPage();
    } else {
      return null;
    }
  }
  
  
};

export default withRouter(FeedNav);