import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class FeedsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const feedId = this.props.feed.id;
    this.props.fetchFeed(feedId).then(this.props.history.push(`/feeds/${feedId}`));
  }
  
  render() {
    return (
      <li onClick={this.handleClick} className="feed-list-item">
        <div className='tab'>
            <div className='icon'><img src={window.arrowRightURL} />
            
            </div>
            <div className='nav-bar-feeds'>
              {this.props.feed.feed_title}
            </div>
          </div>
      </li>
    )
  }
}

export default withRouter(FeedsIndexItem);