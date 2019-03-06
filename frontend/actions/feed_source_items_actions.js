import * as feedSourceItemApiUtils from '../util/feed_source_item_api_util';

export const RECEIVE_FEED_SOURCE_ITEMS = "RECEIVE_FEED_SOURCE_ITEMS";
export const RECEIVE_FEED_SOURCE_ITEM = "RECEIVE_FEED_SOURCE_ITEM";
export const REMOVE_FEED_SOURCE_ITEM = "REMOVE_FEED_SOURCE_ITEM";
export const RECEIVE_FEED = "RECEIVE_FEED";

export const createFeedSourceItem = (feedSourceItem) => dispatch => {
  return feedSourceItemApiUtils.createFeedSourceItem(feedSourceItem).then( feed => dispatch(receiveFeed(feed)))
};

const receiveFeed = (feed) => {
  return({
    type: RECEIVE_FEED,
    feed: feed
  })
}

export const fetchFeedSourceItems = () => dispatch => {
  return feedSourceItemApiUtils.fetchFeedSourceItems().then( feedSources => dispatch(receiveFeedSourceItems(feedSources)))
};

export const deleteFeedSourceItem = (feedId) => dispatch => {
  return feedSourceItemApiUtils.deleteFeedSourceItem(feedId).then( feedSourceItem => dispatch(removeFeedSourceItem(feedSourceItemId)))
  };

const receiveFeedSourceItem = (feedSourceItem) => {
  return({
    type: RECEIVE_FEED_SOURCE_ITEM,
    feedSourceItem: feedSourceItem
  })
}

const receiveFeedSourceItems = (feedSourceItems) => {
  return({
    type: RECEIVE_FEED_SOURCE_ITEMS,
    feedSourceItems: feedSourceItems
  })
}

const removeFeedSourceItem = (feedSourceItemId) => {
  return({
    type: REMOVE_FEED_SOURCE_ITEM,
    feedSourceItemId: feedSourceItemId
  })
}

