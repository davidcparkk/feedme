export const selectFeed = (feeds, currentUserId) => {
  return feeds.filter(feed => feed.user_id === currentUserId);
};

// export const selectArticles = (articles, currentUserId) => {
//   return articles.filter(article => )
// }

