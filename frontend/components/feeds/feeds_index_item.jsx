import React from 'react';
import {Link} from 'react-router-dom';

const FeedsIndexItem = (props) => {
  return (
    <li>
      <div className='tab'>
          <div className='icon'><img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/arrow-right.svg')} />
          
          </div>
          {props.feed.feed_title}
        </div>
    </li>
  )
}

export default FeedsIndexItem;