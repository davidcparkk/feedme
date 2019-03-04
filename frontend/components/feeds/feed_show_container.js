import {connect} from 'react-redux';
import {fetchFeed, fetchFeeds} from '../../actions/feed_actions';
import {selectFeed} from '../../reducers/selectors';
import FeedShow from './feed_show';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let feeds_values = Object.values(state.entities.feeds);
  let feedId = parseInt(ownProps.match.params.feedId);
  let feed = state.entities.feeds[feedId];

  
  let currentUserId = parseInt(state.session.id);
  let currentUserFeeds = selectFeed(feeds_values, currentUserId);


  return ({
    currentUserFeeds: currentUserFeeds,
    feed: feed,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: id => dispatch(fetchFeed(id)),
    fetchFeeds: () => dispatch(fetchFeeds()),
    openModal: (type) => dispatch(openModal(type))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FeedShow);
