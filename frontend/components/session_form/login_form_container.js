import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: "login",
    navLink: <Link to='/signup'>sign up</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);