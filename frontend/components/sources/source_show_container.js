import {connect} from 'react-redux';
import {fetchSource, fetchSources} from '../../actions/source_actions';
import SourceShow from './source_show';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let sourceId = parseInt(ownProps.match.params.sourceId);
  let source = state.entities.sources[sourceId];

  return ({
    source: source
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSource: id => dispatch(fetchSource(id)),
    fetchSources: () => dispatch(fetchSources()),
    openModal: (type) => dispatch(openModal(type))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SourceShow);
