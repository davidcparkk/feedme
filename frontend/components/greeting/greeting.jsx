import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signinLink = () => {
    return (
      <nav className = 'login-signup'>
        <div className="feedme-welcome-container">
            <img src={window.feedmeURL} alt="" className='icon-img' size={24} />
            
          </div>
        <div >
        <Link to='/' className='login-button'>Home</Link>
        <Link to='/login' className='login-button'>Login</Link>
        </div>
      </nav>
    );
  }

  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
  }

  const personalGreeting = () => {
    
    return(
      <div className='header'>
        <div className="feedme-welcome-container">
          <img src={window.feedmeURL} alt="" className='icon-img' size={24} />
            <div className='feedme-welcome'>feedme</div>
          </div>
        
        <div className='profile-container'>
          <p className='header-name'>Welcome, {props.currentUser.username}!</p>
          <img src={window.flashlightURL} alt="" className='icon-img' size={24} />  
          <button className='header-button' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }

  return props.currentUser ? personalGreeting() : signinLink();
};

export default Greeting;

 

