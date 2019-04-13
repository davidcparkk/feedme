import {connect} from 'react-redux';
import ArticleItem from './article_item';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  // let articleId = parseInt(ownProps.match.params.articleId);
  // let article = state.entities.articles[articleId];
  return ({
    // article: article
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (type) => dispatch(openModal(type))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem);