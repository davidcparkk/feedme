import React from 'react';
import { withRouter } from 'react-router-dom';

class FeedsForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      feed_title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const feed = Object.assign({}, this.state);
    this.props.action(feed).then(this.props.closeModal).then(() => this.props.history.push('/feeds'));
  }

  render () {
    return (
      <div className='display-container'>
        <h3>Create </h3>
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className='close-x'>X</div>
            <label>Title
              <input
                type="text"
                value={this.state.feed_title}
                onChange={this.update('feed_title')} />
            </label>

            <input type="submit" value={this.props.formType} />
          
        </form>
      </div>
    );
  }
}

export default withRouter(FeedsForm);