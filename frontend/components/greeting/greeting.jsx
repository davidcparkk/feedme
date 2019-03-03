import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/feedly-512.png';

const Greeting = (props) => {
  const signinLink = () => {
    return (
      <nav className = 'login-signup'>
        <header>
          <h1>Feedme</h1>
        </header>
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
        {/* <img src={logo} alt=""/> */}
        <p>Start</p>
        <h2 className='header-name'>Hi, {props.currentUser.username}!</h2>
        <button className='header-button' onClick={handleLogout}>Log Out</button>
      </div>
    )
  }

  return props.currentUser ? personalGreeting() : signinLink();
};

export default Greeting;