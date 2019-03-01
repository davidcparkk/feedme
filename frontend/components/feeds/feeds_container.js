import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Feeds from './feeds';

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return{
    
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Feeds);