import * as feedApiUtils from '../util/feed_api_util';

export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
export const RECEIVE_FEED = "RECEIVE_FEED";
export const REMOVE_FEED = "REMOVE_FEED";


// export const receive

export const fetchFeeds = () => dispatch => {
  return feedApiUtils.fetchFeeds().then( feeds => dispatch(receiveFeeds(feeds)))
  };


export const fetchFeed = (feedId) => dispatch => {
  return feedApiUtils.fetchFeed(feedId).then( payload => dispatch(receiveFeed(payload)))
  };


export const createFeed = (feed) => dispatch => {
  return feedApiUtils.createFeed(feed).then( feed => dispatch(receiveFeed(feed)))
  };


export const updateFeed = (feed) => dispatch => {
  return feedApiUtils.updateFeed(feed).then( feed => dispatch(receiveFeed(feed)))
  };


export const deleteFeed = (feedId) => dispatch => {
  return feedApiUtils.deleteFeed(feedId).then( feed => dispatch(removeFeed(feedId)))
  };



const receiveFeeds = (feeds) => {
  return({
    type: RECEIVE_FEEDS,
    feeds: feeds
  })
}

const receiveFeed = (feed) => {
  return({
    type: RECEIVE_FEED,
    feed: feed
  })
}

const removeFeed = (feedId) => {
  return({
    type: REMOVE_FEED,
    feedId: feedId
  })
}

