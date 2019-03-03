import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/feedly.svg';

const Greeting = (props) => {
  const signinLink = () => {
    return (
      <nav className = 'login-signup'>
        <div className="feedme-welcome-container">
            <img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/feedly.svg')} alt="" className='icon-img' size={24} />
            
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
            <img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/feedly.svg')} alt="" className='icon-img' size={24} />
            <div className='feedme-welcome'>feedme</div>
          </div>
        
        <div className='profile-container'>
          <h2 className='header-name'>Hi, {props.currentUser.username}</h2>
          <button className='header-button' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }

  return props.currentUser ? personalGreeting() : signinLink();
};

export default Greeting;