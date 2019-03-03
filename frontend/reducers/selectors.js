export const selectFeed = (feeds, currentUserId) => {
  return feeds.filter(feed => feed.user_id === currentUserId);
};

