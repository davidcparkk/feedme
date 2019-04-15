import {connect} from 'react-redux';
import FeedArticleShow from './feed_article_show';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = (state, ownProps) => {
  let articleId = parseInt(ownProps.match.params.articleId);
  let feedId = parseInt(ownProps.match.params.feedId);
  let article = state.entities.articles[articleId];
  let feed = state.entities.feeds[feedId];
  let source = state.entities.sources[parseInt(article.source_id)];
  return ({
    article: article,
    source: source,
    feed: feed
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (id) => dispatch(fetchFeed(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedArticleShow);