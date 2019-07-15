
import React from 'react';
import { Link } from 'react-router-dom';
import FeedsIndexItem from '../feeds/feeds_index_item';

class Splash extends React.Component {
  SplashPage () {
    return (
      <div className='landing'>
        <div className='get-started'>
          <div className='get-started-center-cont'>
            <h1 className='splash-h1'>Welcome to feedme</h1>
            <h2 className='splash-h2'>GET INFORMED. GET INSPIRED.</h2>
            <h3 className='splash-h3'>Stories curated for you.</h3>
            <Link to='/signup' className='signup-link'>GET STARTED FOR FREE</Link>
            <div ><img className='container-centered-main-img' src={window.splashURL}></img>
            </div>
            <div className="contact-info">
          
            <a href="https://www.linkedin.com/in/david-park-8007aa58/" target="_blank"><img src={window.linkedIn} className="logo-small"></img></a>
            
            <a href="https://www.github.com/davidcparkk" target="_blank"><img src={window.github} className="logo-small"></img></a>

          </div>
          </div>
          
          
        </div>
      </div>
    );
  }
  
  render (){
    if (this.props.currentUser) {
      return null;
    } else {
      return this.SplashPage();
    }
  }
  
  
};

export default Splash;