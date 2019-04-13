export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

export const fetchArticle = (articleId) => dispatch => {
  return sourceApiUtils.fetchArticle(articleId).then( payload => dispatch(receiveSource(payload)))
  };

export const fetchArticles = () => dispatch => {
  return sourceApiUtils.fetchArticles().then( sources => dispatch(receiveArticles(articles)))
  };

const receiveArticles = (articles) => {
  return({
    type: RECEIVE_ARTICLES,
    articles: articles
  })
}

export const receiveArticle = (article) => {
  return({
    type: RECEIVE_ARTICLE,
    article: article
  })
}