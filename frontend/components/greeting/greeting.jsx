import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signinLink = () => {
    return (
      <nav className = 'login-signup'>
        <Link to='/login' class='login-button'>Login</Link>
      </nav>
    );
  }

  const personalGreeting = () => {
    return(
      <div className='header'>
        <h2 className='header-name'>Hi, {props.currentUser.username}!</h2>
        <button className='header-button' onClick={props.logout}>Log Out</button>
      </div>
    )
  }

  return props.currentUser ? personalGreeting() : signinLink();
};

export default Greeting;