import {connect} from 'react-redux';
import {fetchFeed, fetchFeeds} from '../../actions/feed_actions';
import {selectFeed} from '../../reducers/selectors';
import FeedShow from './feed_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchSource, fetchSources } from '../../actions/source_actions';

const mapStateToProps = (state, ownProps) => {
  let feedId = parseInt(ownProps.match.params.feedId);
  let feed = state.entities.feeds[feedId];
  let sources = state.entities.sources;
  // let feedSourceArr = feedSources.map(feedSourceId => sources[feedSourceId]);
  let articles = Object.values(state.entities.articles);

  return ({
    
    feed: feed,
    articles: articles,
    sources: sources
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: id => dispatch(fetchFeed(id)),
    fetchFeeds: () => dispatch(fetchFeeds()),
    openModal: (type) => dispatch(openModal(type)),
    fetchSources: () => dispatch(fetchSources())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FeedShow);
