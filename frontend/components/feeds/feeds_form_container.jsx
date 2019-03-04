import { connect } from 'react-redux';
import FeedsForm from './feeds_form';
import { createFeed } from '../../actions/feed_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  

  return {
     feed: {
       feed_title: '',
     },
     formType: "Create Feed",
     errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: feed => dispatch(createFeed(feed)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsForm);