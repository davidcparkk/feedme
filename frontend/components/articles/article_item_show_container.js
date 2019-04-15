import {connect} from 'react-redux';
import ArticleItemShow from './article_item_show';
import { fetchSources } from '../../actions/source_actions';

const mapStateToProps = (state, ownProps) => {
  let articleId = parseInt(ownProps.match.params.articleId);
  let article = state.entities.articles[articleId];
  let sourceId = parseInt(article.source_id);
  let source = state.entities.sources[sourceId];
  return ({
    article: article,
    source: source
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => dispatch(fetchSources())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleItemShow);