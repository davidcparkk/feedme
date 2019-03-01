import React from 'react';
import {Link} from 'react-router-dom';

const FeedsIndexItem = (props) => {
  return (
    <li>
      {props.feed.feed_title}
    </li>
  )
}

export default FeedsIndexItem;