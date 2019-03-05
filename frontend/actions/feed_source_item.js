import * as feedSourceItemApiUtils from '../util/feed_source_item_api_util';

export const RECEIVE_FEED_SOURCE_ITEM = "RECEIVE_FEED_SOURCE_ITEM";
export const REMOVE_FEED_SOURCE_ITEM = "REMOVE_FEED_SOURCE_ITEM";

export const createFeed = (feed) => dispatch => {
  return feedSourceItemApiUtils.createFeedSourceItem(feed).then( feed => dispatch(receiveFeedSourceItem(feed)))
  };

export const deleteFeed = (feedId) => dispatch => {
  return feedSourceItemApiUtils.deleteFeedSourceItem(feedId).then( feedSourceItem => dispatch(removeFeedSourceItem(feedSourceItemId)))
  };

const receiveFeedSourceItem = (feedSourceItem) => {
  return({
    type: RECEIVE_FEED_SOURCE_ITEM,
    feedSourceItem: feedSourceItem
  })
}

const removeFeedSourceItem = (feedSourceItemId) => {
  return({
    type: REMOVE_FEED_SOURCE_ITEM,
    feedSourceItemId: feedSourceItemId
  })
}

