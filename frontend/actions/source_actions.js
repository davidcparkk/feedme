import * as sourceApiUtils from '../util/source_api_util';

export const RECEIVE_SOURCES = "RECEIVE_SOURCES";
export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "REMOVE_SOURCE";
// export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";;
// export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

// export const fetchArticles = () => dispatch => {
//   return sourceApiUtils.fetchArticles().then( sources => dispatch(receiveArticles(articles)))
//   };


export const fetchArticle = (articleId) => dispatch => {
  return sourceApiUtils.fetchArticle(articleId).then( payload => dispatch(receiveSource(payload)))
  };

export const fetchSources = () => dispatch => {
  return sourceApiUtils.fetchSources().then( sources => dispatch(receiveSources(sources)))
  };


export const fetchSource = (sourceId) => dispatch => {
  return sourceApiUtils.fetchSource(sourceId).then( payload => dispatch(receiveSource(payload)))
  };


export const createSource = (source) => dispatch => {
  return sourceApiUtils.createSource(source).then( source => dispatch(receiveSource(source)))
  };


export const updateSource = (source) => dispatch => {
  return sourceApiUtils.updateSource(source).then( source => dispatch(receiveSource(source)))
  };


export const deleteSource = (sourceId) => dispatch => {
  return sourceApiUtils.deleteSource(sourceId).then( source => dispatch(removeSource(sourceId)))
  };

  // const receiveArticles = (articles) => {
  //   return({
  //     type: RECEIVE_ARTICLES,
  //     articles: articles
  //   })
  // }
  
  // export const receiveArticle = (article) => {
  //   return({
  //     type: RECEIVE_ARTICLE,
  //     article: article
  //   })
  // }

const receiveSources = (sources) => {
  return({
    type: RECEIVE_SOURCES,
    sources: sources
  })
}

const receiveSource = (payload) => {
  return({
    type: RECEIVE_SOURCE,
    payload: payload
  })
}

const removeSource = (sourceId) => {
  return({
    type: REMOVE_SOURCE,
    sourceId: sourceId
  })
}

