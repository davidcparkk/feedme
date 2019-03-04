import React from 'react';
import {Link} from 'react-router-dom';

const FeedsIndexItem = (props) => {
  return (
    <li>
      <div className='all-feeds-index-item'>
          <div className='icon'><img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/read.svg')} />
          
          </div>
          {props.feed.feed_title}
        </div>
    </li>
  )
}

export default FeedsIndexItem;