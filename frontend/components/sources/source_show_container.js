import {connect} from 'react-redux';
import {fetchSource, fetchSources} from '../../actions/source_actions';
import SourceShow from './source_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectFeed } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let sourceId = parseInt(ownProps.match.params.sourceId);
  let source = state.entities.sources[sourceId];
  let feeds_values = Object.values(state.entities.feeds);
  let currentUserId = parseInt(state.session.id);
  const currentUserFeeds = selectFeed(feeds_values, currentUserId);
  let articles = Object.values(state.entities.articles);
  return ({
    feeds: currentUserFeeds,
    source: source,
    articles: articles
  });
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (type) => dispatch(openModal(type))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SourceShow);
