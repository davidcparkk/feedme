import * as sessionApiUtils from '../util/session_api_util';

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const logoutCurrentUser = () => {
  return({
    type: LOGOUT_CURRENT_USER
  });
};

export const receiveErrors = (errors) => {
  
  return({
    
    type: RECEIVE_ERRORS,
    errors: errors
  });
};

export const receiveCurrentUser = (currentUser) => {
  
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
};

export const logout = () => dispatch => {
  return sessionApiUtils.logout()
    .then( (user) => dispatch(logoutCurrentUser() ));
};

export const login = (user) => dispatch => {
  return sessionApiUtils.login(user)
    .then( (currentUser) => (dispatch(receiveCurrentUser(currentUser))), (errors) => (dispatch(receiveErrors(errors.responseJSON)) ));
};

export const signup = (user) => dispatch => {
  
  return sessionApiUtils.signup(user)
    .then( (currentUser) => (dispatch(receiveCurrentUser(currentUser))), (errors) => (dispatch(receiveErrors(errors.responseJSON)) ));
};