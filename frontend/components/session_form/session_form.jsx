import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

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

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: 'guestDemo',
      password: 'password'
    };
    
    this.props.login(user);
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
        <form onSubmit={this.handleSubmit}>
          Welcome to Feedme
          <br/>
          <ul>{errors}</ul>
          <div className='login-form'>
            <br/>
            <label>
                <input type="text" 
                value={this.state.username} 
                placeholder="Username"
                onChange={this.update('username')} 
                className='login-input'/>
            </label>
            <br/>
            <label>
                <input type="password" 
                value={this.state.password} 
                placeholder="Password"
                onChange={this.update('password')} 
                className='login-input'/>
            </label>
            <br/>
            <br/>
            <input type='submit'  
              className='session-submit' 
              value={this.props.formType} 
              />
            <br/>
            <br/>
          </div>
        </form>
        <form onSubmit={this.handleDemo}>
        <input type='submit' 
              className='demo-submit' 
              value="DEMO" 
               />
        </form>
        <br/>
        {this.props.navLink}
      </div>
    )
  }
}

export default SessionForm;

// onSubmit={this.handleDemo}