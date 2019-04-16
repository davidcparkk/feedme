import {connect} from 'react-redux';
import ArticleShow from './article_show';
import { fetchSource } from '../../actions/source_actions';
import {fetchArticle} from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  let articleId = parseInt(ownProps.match.params.articleId);
  let sourceId = parseInt(ownProps.match.params.sourceId);
  let article = state.entities.articles[articleId];
  let source = state.entities.sources[sourceId];
  return ({
    article: article,
    source: source
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSource: (id) => dispatch(fetchSource(id)),
    fetchArticle: (articleId) => dispatch(fetchArticle(articleId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);