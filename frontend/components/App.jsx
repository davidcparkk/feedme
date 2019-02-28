import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {Route,Link,HashRouter} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App =() => {
  return(
    <div class='splash'>
      <div class='splash-div'>
        <header>
          <h1>Feedme</h1>
          
        </header>
        <GreetingContainer class='greeting-container'/>
      
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
      </div>

      <div class='get-started'>
        <div class='container-centered'>
          <h2>Be in the know</h2>
          <br/>
          <div>Keep up with all the topics that matter to you.</div>
          <br/>
          <br/>
          <Link to='/signup' class='signup-link'>GET STARTED FOR FREE</Link>
        </div>
      </div>

      <div class='discover'>
        <div class='container-centered'>
          <h2>Discover insightful sources</h2>
        </div>
      </div>

    </div>
  )
};

export default App;