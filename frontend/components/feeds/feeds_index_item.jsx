import React from 'react';
import {Link} from 'react-router-dom';

const FeedsIndexItem = (props) => {
  return (
    <li>
      <div className='tab'>
        <div className='icon'></div>{props.feed.feed_title}</div>
    </li>
  )
}

export default FeedsIndexItem;