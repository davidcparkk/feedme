import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {Route,Link,HashRouter,Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import FeedsIndexContainer from './feeds/feeds_index_container';
import FeedShowContainer from './feeds/feed_show_container';

import FeedsFormContainer from './feeds/feeds_form_container';
// <Route path='/feeds' component={FeedsContainer} />


const App =() => {
  return(
      <div className='splash-div'>
        <GreetingContainer className='greeting-container'/> 
        <Switch>
          <AuthRoute path='/login' component={LoginFormContainer} />
          <AuthRoute path='/signup' component={SignupFormContainer} />
          <ProtectedRoute path='/feeds/new' component={FeedsFormContainer} />
          <Route path='/feeds/:feedId' component={FeedShowContainer} />
          <ProtectedRoute path='/feeds' component={FeedsIndexContainer} />

          <Route exact path='/' component={SplashContainer} />
        </Switch>
      </div>
  )
};

export default App;