import { RECEIVE_FEEDS, RECEIVE_FEED, REMOVE_FEED } from '../actions/feed_actions';
import {merge} from 'lodash';

const feedsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FEEDS:
      newState = merge({}, state, action.feeds);
      return newState;
    case RECEIVE_FEED:
      newState = merge({}, state, {[action.feed.id]: action.feed});
      return newState;
    case REMOVE_FEED:
      newState = merge({}, state);
      delete newState[action.feedId];
      return newState;
    default:
      return state;
  }
}

export default feedsReducer;