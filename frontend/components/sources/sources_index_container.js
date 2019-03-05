import {connect} from 'react-redux';
import {fetchSources, deleteSource} from '../../actions/source_actions';
import {fetchFeeds} from '../../actions/feed_actions';
import SourcesIndex from './sources_index';


const mapStateToProps = state => {
  let sources_values = Object.values(state.entities.sources);
  return {
    sources: sources_values
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchSources: () => dispatch(fetchSources()),
    fetchFeeds: () => dispatch(fetchFeeds())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SourcesIndex);