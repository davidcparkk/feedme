import {connect} from 'react-redux';
import {fetchFeeds, deleteFeed} from '../../actions/feed_actions';
import FeedsIndex from './feeds_index';
import {selectFeed} from '../../reducers/selectors';

const mapStateToProps = state => {
  debugger
  
  let feeds_values = Object.values(state.entities.feeds);
  
  let currentUserId = parseInt(state.session.id);
  const currentUserFeeds = selectFeed(feeds_values, currentUserId);

 
  return {
    feeds: currentUserFeeds
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFeeds: () => dispatch(fetchFeeds()),
    deleteFeed: (feedId) => dispatch(deleteFeed(feedId))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedsIndex);