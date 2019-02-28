import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: "signup",
    navLink: <Link to='/login'>login</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);