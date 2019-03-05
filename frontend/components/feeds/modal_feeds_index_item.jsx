import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ModalFeedsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(e) {
    this.props.createFeedSourceItem({feed_id: this.props.feed.id, source_id: this.props.match.params.sourceId});
  }
  
  render() {
    debugger
    return (
      <li>
        <div className='tab'>
            <div className='icon'><img src={window.arrowRightURL} />
            
            </div>
            <div  onClick={this.handleClick}>
              {this.props.feed.feed_title}
            </div>
          </div>
      </li>
    )
  }
}

export default withRouter(ModalFeedsIndexItem);