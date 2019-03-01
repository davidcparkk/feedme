import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {Route,Link,HashRouter} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
// import FeedsContainer from './feeds/feeds_container';
// <Route path='/feeds' component={FeedsContainer} />
import ErrorBoundary from './errors/error_boundary';

const App =() => {
  return(


      <div className='splash-div'>
        <GreetingContainer className='greeting-container'/>       
        <Route exact path='/' component={SplashContainer} />

        <AuthRoute path='/login' component={LoginFormContainer} />

        <AuthRoute path='/signup' component={SignupFormContainer} />

      </div>

  )
};

export default App;