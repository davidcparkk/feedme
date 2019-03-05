import React from 'react';
import { withRouter } from 'react-router-dom';

class FollowDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    // e.preventDefault();
    // const feed = Object.assign({}, this.state);
    // this.props.action(feed).then(this.props.closeModal).then(() => this.props.history.push('/feeds'));
  }

  render () {
    return (
      <div className='follow-dropdown'>
        <div onClick={this.props.closeModal} className='close-x'>X</div>
        
        
      </div>
    );
  }
}

export default withRouter(FollowDropDown);