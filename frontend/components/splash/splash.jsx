
import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
  const SplashPage = () => {
    return (
      <div className='landing'>
        <div className='get-started'>
          <div className='container-centered'>
            <h2>Be in the know</h2>
            <br/>
            <div>Keep up with all the topics that matter to you.</div>
            <br/>
            <br/>
            <Link to='/signup' className='signup-link'>GET STARTED FOR FREE</Link>
          </div>
        </div>

        <div className='discover'>
          <div className='container-centered'>
            <h2>Discover insightful sources</h2>
          </div>
        </div>
        
        </div>
    );
  }

  const SignedInPage = () => {
    return(
      <div className='header'>

      </div>
    )
  }

  return props.currentUser ? SignedInPage() : SplashPage();
};

export default Splash;