import {connect} from 'react-redux';
import {fetchFeed} from '../../actions/feed_actions';
import {selectFeed} from '../../reducers/selectors';
import FeedShow from './feed_show';

const mapStateToProps = (state, ownProps) => {
  let feeds_values = Object.values(state.entities.feeds);
  
  let feedId = parseInt(ownProps.match.params.feedId);
  const feed = selectFeed(feeds_values, feedId);

  return ({
    feed: feed,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: id => dispatch(fetchFeed(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FeedShow);
