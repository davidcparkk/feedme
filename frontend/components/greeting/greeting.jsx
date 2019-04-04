import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../app/assets/images/icon.svg';

const Greeting = (props) => {
  const signinLink = () => {
    return (
      <div className = 'splash-nav'>
        <div className = "splash-nav-container">
          <div className="feedme-welcome-container">
              <img src={icon} alt="" className='icon-img' size={40} />
            </div>
          <div >
          <Link to='/' className='login-button'>Home</Link>
          <Link to='/login' className='login-button'>Login</Link>
          </div>
        </div>
      </div>
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
          <img src={icon} alt="" className='icon-img' size={40} />
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

 

