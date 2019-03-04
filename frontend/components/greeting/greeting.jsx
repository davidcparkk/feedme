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
          
          <nav id='dropdown'>
            <img src={require('/home/david/Documents/App Academy/Projects/Feedme/feedMe/app/assets/images/flashlight-svgrepo-com.svg')} alt="" className='icon-img' size={24} />  
            <ul>
              <li><p className='header-name'>{props.currentUser.username}</p></li>
              <li><button className='header-button' onClick={handleLogout}>Log Out</button></li>
            </ul>
          </nav>
          <div className='dropdown'>
            
          </div>
          
          
          
        </div>
      </div>
    )
  }

  return props.currentUser ? personalGreeting() : signinLink();
};

export default Greeting;

 

