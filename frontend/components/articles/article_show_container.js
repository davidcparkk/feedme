import {connect} from 'react-redux';
import ArticleShow from './article_show';

const mapStateToProps = (state, ownProps) => {
  // let articleId = parseInt(ownProps.match.params.articleId);
  // let article = state.entities.articles[articleId];
  return ({
    // article: article
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);