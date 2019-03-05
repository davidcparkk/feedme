import * as sourceApiUtils from '../util/source_api_util';

export const RECEIVE_SOURCES = "RECEIVE_SOURCES";
export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "REMOVE_SOURCE";

export const fetchSources = () => dispatch => {
  return sourceApiUtils.fetchSources().then( sources => dispatch(receiveSources(sources)))
  };


export const fetchSource = (sourceId) => dispatch => {
  return sourceApiUtils.fetchSource(sourceId).then( source => dispatch(receiveSource(source)))
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



const receiveSources = (sources) => {
  return({
    type: RECEIVE_SOURCES,
    sources: sources
  })
}

const receiveSource = (source) => {
  return({
    type: RECEIVE_SOURCE,
    source: source
  })
}

const removeSource = (sourceId) => {
  return({
    type: REMOVE_SOURCE,
    sourceId: sourceId
  })
}

