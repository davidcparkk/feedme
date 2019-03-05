import React from 'react';
import AllFeedsIndexItem from './all_feeds_index_item';
import CreateFormContainer from './feeds_form_container';
import {Link} from 'react-router-dom';

class FeedsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }
  
  SignedInPage() {
    
    let allFeeds = this.props.feeds.map(feed=> {
      return(
        <AllFeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    });
    return(
      <div className='display-container'>
        <h2>All</h2>
        <div className='separator-small'></div>
        <div className='separator-small'></div>
        <div className='separator-small'></div>
        <p>LATEST</p>
        <div className='separator-small'></div>
        <div className='separator-small'></div>
        <ul>
          {allFeeds}
        </ul>
      </div>
    )
  }
  render (){
    if (this.props.currentUser){
      return this.SignedInPage();
  } else {
    return null;
  }
  }
}

export default FeedsIndex;