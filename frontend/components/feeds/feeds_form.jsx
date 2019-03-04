import React from 'react';
import { withRouter } from 'react-router-dom';

class FeedsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.feed;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/feeds'));
  }

  render () {
    return (
      <div className='display-container'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
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