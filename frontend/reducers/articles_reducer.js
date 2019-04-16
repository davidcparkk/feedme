import { RECEIVE_SOURCE } from '../actions/source_actions';
import { RECEIVE_FEED } from '../actions/feed_actions';
import { RECEIVE_ARTICLES, RECEIVE_ARTICLE } from '../actions/article_actions';
import {merge} from 'lodash';

const articlesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_SOURCE:
      newState = merge({}, action.payload.articles);
      return newState;
    case RECEIVE_FEED:
      newState = merge({},action.payload.articles);
      return newState;
    case RECEIVE_ARTICLES:
      newState = merge({}, action.articles);
      return newState;
    case RECEIVE_ARTICLE:
      newState = merge({},state, action.article);
      return newState;
    default:
      return state;
  }
}

export default articlesReducer;