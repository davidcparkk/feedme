import React from 'react';
import {Link} from 'react-router-dom';

const AllFeedsIndexItem = (props) => {
  return (
    <li>
      <div className='all-feeds-index-item'>
          <div className='icon'><img src={window.readURL} />
          
          </div>
          {props.feed.feed_title}
        </div>
    </li>
  )
}

export default AllFeedsIndexItem;