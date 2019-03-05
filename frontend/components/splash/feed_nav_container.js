import {connect} from 'react-redux';
import {selectFeed} from '../../reducers/selectors';
import {logout} from '../../actions/session_actions';
import {fetchFeeds} from '../../actions/feed_actions';
import FeedNav from './feed_nav';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  let feeds_values = Object.values(state.entities.feeds);
  let currentUserId = parseInt(state.session.id);
  const currentUserFeeds = selectFeed(feeds_values, currentUserId);

  return {
    feeds: currentUserFeeds,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    fetchFeeds: () => dispatch(fetchFeeds()),
    openModal: (type) => dispatch(openModal(type))
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedNav);
