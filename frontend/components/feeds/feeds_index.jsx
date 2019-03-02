import React from 'react';
import FeedsIndexItem from './feeds_index_item';
import CreateFormContainer from './feeds_form_container';

class FeedsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }
  
  render() {

    let feeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    })
    
    return(
      <div>
        <ul>
          {feeds}
        </ul>
        <CreateFormContainer />
      </div>
    )
  }
}

export default FeedsIndex;