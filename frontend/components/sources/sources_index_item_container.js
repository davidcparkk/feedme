import {connect} from 'react-redux';
import {fetchSource} from '../../actions/source_actions';
import {fetchFeeds} from '../../actions/feed_actions';
import SourcesIndexItem from './sources_index_item';




const mapDispatchToProps = dispatch => {
  return{
    fetchSource: (sourceId) => dispatch(fetchSource(sourceId))
  };
}

export default connect(null,mapDispatchToProps)(SourcesIndexItem);