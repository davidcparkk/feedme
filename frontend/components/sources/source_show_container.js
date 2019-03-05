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
  return ({
    feeds: currentUserFeeds,
    source: source
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeeds: () => dispatch(fetchFeeds()),
    fetchSources: () => dispatch(fetchSources()),
    openModal: (type) => dispatch(openModal(type))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SourceShow);
