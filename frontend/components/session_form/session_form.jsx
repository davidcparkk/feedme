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

  componentWillUnmount() {
    
    this.props.clearErrors();
  }

  render() {
    let errors = this.props.errors.map( (error,idx) => {
      return(
        <li key={`error-${idx}`} >
          {error}
        </li>
      )
    })

    return(
      <div className = 'login-form-container'>
        <div className = 'session-center-container'>
          <h2 className='welcome-msg'>{this.props.welcomeMsg}</h2>
          <ul className='error-msg'>{errors}</ul>
          <form onSubmit={this.handleSubmit} className='login-form'>
          
         
          
          
          
          <div>
            
            <label>
                <input type="text" 
                value={this.state.username} 
                placeholder="Username"
                onChange={this.update('username')} 
                className='login-input'/>
            </label>
            
            <label>
                <input type="password" 
                value={this.state.password} 
                placeholder="Password"
                onChange={this.update('password')} 
                className='login-input'/>
            </label>
            <br/>
            
            <input type='submit'  
              className='session-submit' 
              value={this.props.formType} 
              />
            
        
          </div>
        </form>
        <form onSubmit={this.handleDemo}>
          <input type='submit' 
                className='demo-submit' 
                value="DEMO" 
                />
        </form>
       
        <div className='session-navLink' >
        <br/>
        
        {this.props.navLink}
        </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;

// onSubmit={this.handleDemo}