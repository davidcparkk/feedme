
import React from 'react';
import { Link } from 'react-router-dom';
import FeedsIndexItem from '../feeds/feeds_index_item';

class Splash extends React.Component {
  SplashPage () {
    return (
      <div className='landing'>
        <div className='get-started'>
          <div className='container-centered'>
            <h1 className='splash-tag-line'>Where readers become leaders</h1>
            <br/>
            <div>Be in the know. Keep up with all the topics that matter to you.</div>
            <div>All in one place</div>
            <br/>
            <br/>
            <Link to='/signup' className='signup-link'>GET STARTED FOR FREE</Link>
          </div>
          <img className='container-centered-main-img'src={window.splashURL}/>
        </div>
        <div className='discover'>
          <div className='container-centered'>
            <h2 className='splash-tag-line'>Discover insightful sources</h2>
            <div className='splash-img-container'>
              <div className="splash-descriptions">
              <div><img src={window.youtubeURL} className='splash-images'/></div><div>
              See new videos from the YouTube</div></div>
              
              <div className="splash-descriptions"><div><img src={window.twitterURL} className='splash-images'/></div><div>Follow your favorite twitter influencer or hashtag and never miss crucial updates</div></div>
              
              <div className="splash-descriptions"><div><img src={window.rssURL} className='splash-images'/></div>
              <div>Follow anyone on the Web who publishes an RSS feed</div></div>
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