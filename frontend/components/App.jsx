import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {Route,Link,HashRouter} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import FeedsIndexContainer from './feeds/feeds_index_container';
// <Route path='/feeds' component={FeedsContainer} />


const App =() => {
  return(


      <div className='splash-div'>
        <GreetingContainer className='greeting-container'/> 

        <Route exact path='/' component={SplashContainer} />
        <ProtectedRoute path='/feeds' component={FeedsIndexContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />

        <AuthRoute path='/signup' component={SignupFormContainer} />

      </div>

  )
};

export default App;