import {connect} from 'react-redux';
import {fetchFeeds, deleteFeed} from '../../actions/feed_actions';
import FeedsIndex from './feeds_index';

const mapStateToProps = state => {
  let feeds = Object.values(state.entities.feeds);
  return {
    feeds: feeds
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFeeds: () => dispatch(fetchFeeds()),
    deleteFeed: (feedId) => dispatch(deleteFeed(feedId))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedsIndex);