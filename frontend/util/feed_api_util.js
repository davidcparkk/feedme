

export const fetchFeeds = () => {
  return $.ajax({
    method: "get",
    url: '/api/feeds',
    error: err => console.log(err)
  })
}

export const fetchFeed = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/feeds/${id}`,
    error: err => console.log(err)
  })
}

export const createFeed = (feed) => {
  return $.ajax({
    method: "post",
    url: `/api/feeds`,
    data: {feed},
    error: err => console.log(err)
  })
}

export const deleteFeed = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/feeds/${id}`,
    error: err => console.log(err)
  })
}

export const updateFeed = (feed) => {
  return $.ajax({
    method: "patch",
    url: `/api/feeds/${feed.id}`,
    data: {feed},
    error: err => console.log(err)
  })
}

