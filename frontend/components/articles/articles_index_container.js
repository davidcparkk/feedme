import {connect} from 'react-redux';
import {fetchArticles} from '../../actions/article_actions';
import ArticlesIndex from './articles_index';
import {selectFeed} from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  
  
  // let feeds_values = Object.values(state.entities.feeds);
  
  // let currentUserId = parseInt(state.session.id);
  // const currentUserFeeds = selectFeed(feeds_values, currentUserId);
  let articles = Object.values(state.entities.articles);
 
  return {
    articles: articles,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchArticles: () => dispatch(fetchArticles())
    // deleteFeed: (feedId) => dispatch(deleteFeed(feedId)),
    // openModal: (type) => dispatch(openModal(type))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticlesIndex);