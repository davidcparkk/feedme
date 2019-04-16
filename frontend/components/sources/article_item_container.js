import {connect} from 'react-redux';
import ArticleItem from './article_item';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchArticle} from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  // let articleId = parseInt(ownProps.match.params.articleId);
  // let article = state.entities.articles[articleId];
  return ({
    // article: article
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchArticle: (articleId) => dispatch(fetchArticle(articleId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem);