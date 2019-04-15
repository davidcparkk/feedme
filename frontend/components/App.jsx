import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import {Route,Link,HashRouter,Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import FeedsIndexContainer from './feeds/feeds_index_container';
import FeedShowContainer from './feeds/feed_show_container';
import FeedNavContainer from './splash/feed_nav_container.js';
import Modal from './modal/modal';
import SourcesIndexContainer from './sources/sources_index_container';
import SourceShowContainer from './sources/source_show_container';
import ArticleShowContainer from './articles/article_show_container';
import FeedArticleShowContainer from './articles/feed_article_show_container';
import ArticlesIndexContainer from './articles/articles_index_container';
import ArticleItemShowContainer from './articles/article_item_show_container';

// <Route path='/feeds' component={FeedsContainer} />


const App =() => {
  return(
      <div className='splash-div'>
        <GreetingContainer className='greeting-container'/> 
        <FeedNavContainer />
        <Modal />
        <Switch>
          <AuthRoute exact path='/' component={SplashContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
          <AuthRoute path='/signup' component={SignupFormContainer} />
          <ProtectedRoute path='/sources/:sourceId/articles/:articleId' component={ArticleShowContainer} />
          <ProtectedRoute path='/feeds/:feedId/articles/:articleId' component={FeedArticleShowContainer} />
          <ProtectedRoute exact path='/sources' component={SourcesIndexContainer} />
          <ProtectedRoute path='/articles/:articleId' component={ArticleItemShowContainer} />
          <ProtectedRoute path='/sources/:sourceId' component={SourceShowContainer} />
          <ProtectedRoute path='/feeds/:feedId' component={FeedShowContainer} />
          <ProtectedRoute path='/feeds' component={FeedsIndexContainer} />
          <ProtectedRoute path='/articles' component={ArticlesIndexContainer} />

          
        </Switch>
      </div>
  )
};

export default App;

{/* <ProtectedRoute path='/feeds/new' component={FeedsFormContainer} /> */}