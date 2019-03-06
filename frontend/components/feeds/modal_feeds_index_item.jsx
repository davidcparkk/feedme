import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ModalFeedsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(e) {
    this.props.createFeedSourceItem({feed_id: this.props.feed.id, source_id: this.props.match.params.sourceId});
  }

  // handleDelete(e) {
  //   this.props.deleteFeedSourceItem(
  //     this.props.match.params.sourceId
  //   );
  // }
  
  render() {
    
    return (
      <li className='dropdown-tab'>
        <div className= 'dropdown-tab-container'>
            <div className='icon'><img src={window.arrowRightURL} />
            
            </div>
            <div  className='dropdown-tab-title'>
              {this.props.feed.feed_title}
            </div>
           
        </div>
        <div className='add-source' onClick={this.handleAdd}>+
        </div>
        {/* <div className='delete-source' onClick={this.handleDelete}>-
        </div> */}
      </li>
    )
  }
}

export default withRouter(ModalFeedsIndexItem);