import { RECEIVE_SOURCE } from '../actions/source_actions';
import {merge} from 'lodash';

const articlesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_SOURCE:
      newState = merge({}, state, action.payload.articles);
      return newState;
    default:
      return state;
  }
}

export default articlesReducer;