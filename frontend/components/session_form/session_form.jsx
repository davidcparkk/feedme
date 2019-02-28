import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return(e) => this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {
    let errors = this.props.errors.map( (error,idx) => {
      return(
        <li key={`error-${idx}`}>
          {error}
        </li>
      )
    })

    return(
      <div className = 'login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to Feedme
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <ul>{errors}</ul>
          <div className='login-form'>
            <br/>
            <label>
              Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className='login-input'/>
            </label>

            <label>
              Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input'/>
            </label>
            <br/>
            <input type='submit'  className='session-submit' value={this.props.formType}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;