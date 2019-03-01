import {connect} from 'react-redux';
import {signup, login, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: "CREATE MY ACCOUNT",
    navLink: <Link to='/login'>Existing user? Login</Link>,
    
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);