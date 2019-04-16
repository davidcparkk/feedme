import * as sourceApiUtils from '../util/source_api_util';

export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

export const fetchArticles = () => dispatch => {
  return sourceApiUtils.fetchArticles().then( articles => dispatch(receiveArticles(articles)))
  };

const receiveArticles = (articles) => {
  return({
    type: RECEIVE_ARTICLES,
    articles: articles
  })
}

export const fetchArticle = (articleId) => dispatch => {
  return sourceApiUtils.fetchArticle(articleId).then( article => dispatch(receiveArticle(article)))
  };

export const receiveArticle = (article) => {
  return({
    type: RECEIVE_ARTICLE,
    article: article
  })
}