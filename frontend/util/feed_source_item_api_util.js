export const createFeedSourceItem = (feedSourceItem) => {
  return $.ajax({
    method: "post",
    url: `/api/feed_source_items`,
    data: {feedSourceItem},
    error: err => console.log(err)
  })
}

export const fetchFeedSourceItems = () => {
  return $.ajax({
    method: "get",
    url: `/api/feed_source_items`,
    
    error: err => console.log(err)
  })
}

export const deleteFeedSourceItem = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/feed_source_items/${id}`,
    error: err => console.log(err)
  })
}