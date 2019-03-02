import {connect} from 'react-redux';
import {fetchFeeds, deleteFeed} from '../../actions/feed_actions';
import FeedsIndex from './feeds_index';

const mapStateToProps = state => {
  debugger
  
  let feeds_values = Object.values(state.entities.feeds);
  // let feeds_keys = Object.keys(state.entities.feeds);
  // let currentUser = state.session.id;
  // let currentUserFeeds = [];
  // feeds_keys.forEach(el=>{
  //   if(currentUser === feeds_values[el].user_id) {
  //     currentUserFeeds.push(feeds_values[el])
  //   }
  // })
  // let feeds_values_arr = [];
  // feeds_index.forEach(el=>feeds_values_arr.push((el)));
  // 
  // feeds_index.forEach(el=> {
  //   if (el.id === currentUser) {
  //     currentUserFeeds.push(el);
  //   }
  // });
  return {
    feeds: feeds_values
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFeeds: () => dispatch(fetchFeeds()),
    deleteFeed: (feedId) => dispatch(deleteFeed(feedId))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedsIndex);