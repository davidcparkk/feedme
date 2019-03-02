import { connect } from 'react-redux';
import FeedsForm from './feeds_form';
import { createFeed } from '../../actions/feed_actions';

const mapStateToProps = (state, ownProps) => {
  

  return {
     feed: {
       feed_title: '',
       user_id: '',
       sourceIds: []
     },
     formType: "Create Feed"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: feed => dispatch(createFeed(feed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsForm);