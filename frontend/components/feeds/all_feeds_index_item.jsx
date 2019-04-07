import React from 'react';
import {Link} from 'react-router-dom';

const AllFeedsIndexItem = (props) => {
  return (
    <li className='all-feeds-index-item'>
      <div className='article-picture'></div>
        <div className='feed-show-article-container'>
          <div className="feed-show-article-name">{props.feed.feed_title}</div>   
          <div className="feed-show-source-name"></div>
          <div className="feed-show-article-body"></div>
        </div>
    </li>
  )
}

export default AllFeedsIndexItem;