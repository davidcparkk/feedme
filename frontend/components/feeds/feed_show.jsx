import React from 'react';
import {Link} from 'react-redux';


class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let feed = this.props.feed.map((feed)=> {
      return (
        <li>
          {feed.id}
          {feed.feed_title}
        </li>
      )
    });

    return (
      <div className='display-container'>
        <h1>HI</h1>
        <ul>
          {feed}
        </ul>
      </div>
    )
  }
}

export default FeedShow;