import { connect } from 'react-redux';
import FeedsIndexItem from './feeds_index_item';
import { fetchFeed } from '../../actions/feed_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: feedId => dispatch(fetchFeed(feedId))
  };
};

export default connect(null, mapDispatchToProps)(FeedsIndexItem);