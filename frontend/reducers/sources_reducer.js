import { RECEIVE_SOURCES, RECEIVE_SOURCE, REMOVE_SOURCE } from '../actions/source_actions';
import { RECEIVE_FEED } from '../actions/feed_actions';
import {merge} from 'lodash';

const sourcesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_SOURCES:
      newState = merge({}, state, action.sources);
      return newState;
    case RECEIVE_SOURCE:
      newState = merge({}, state, {[action.payload.source.id]: action.payload.source});
      return newState;
    case REMOVE_SOURCE:
      newState = merge({}, state);
      delete newState[action.sourceId];
      return newState;
    case RECEIVE_FEED:
      newState = merge({}, state, action.payload.sources);
      return newState;
    default:
      return state;
  }
}

export default sourcesReducer;