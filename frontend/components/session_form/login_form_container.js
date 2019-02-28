import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: "LOGIN",
    navLink: <Link to='/signup'>New User? Sign Up</Link>,
    
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);