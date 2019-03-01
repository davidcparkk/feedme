export const fetchFeeds = () => {
  return $.ajax({
    method: "get",
    url: '/api/feeds'
  })
}

export const fetchFeed = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/feeds/${id}`
  })
}

export const createFeed = (feed) => {
  return $.ajax({
    method: "post",
    url: `/api/feeds`,
    data: {feed}
  })
}

export const deleteFeed = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/feeds/${id}`
  })
}

export const updateFeed = (feed) => {
  return $.ajax({
    method: "patch",
    url: `/api/feeds/${feed.id}`,
    data: {feed}
  })
}