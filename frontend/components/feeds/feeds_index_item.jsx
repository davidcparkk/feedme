import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class FeedsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const feedId = this.props.feed.id;
    this.props.history.push(`/feeds/${feedId}`);
  }
  
  render() {
    return (
      <li>
        <div className='tab'>
            <div className='icon'><img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/arrow-right.svg')} />
            
            </div>
            <div>
              <Link to={`/feeds/${this.props.feed.id}`}>{this.props.feed.feed_title}</Link>
            </div>
          </div>
      </li>
    )
  }
}

export default withRouter(FeedsIndexItem);