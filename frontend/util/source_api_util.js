export const fetchArticles = () => {
  return $.ajax({
    method: 'get',
    url: '/api/articles'
  })
}

export const fetchArticle = (articleId) => {
  return $.ajax({
    method: 'get',
    url: `/api/articles/${articleId}`,
    error: err => console.log(err)
  })
}

export const fetchSources = () => {
  return $.ajax({
    method: "get",
    url: '/api/sources',
    error: err => console.log(err)
  })
}

export const fetchSource = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/sources/${id}`,
    error: err => console.log(err)
  })
}

export const createSource = (source) => {
  return $.ajax({
    method: "post",
    url: `/api/sources`,
    data: {source},
    error: err => console.log(err)
  })
}

export const deleteSource = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/sources/${id}`,
    error: err => console.log(err)
  })
}

export const updateSource = (source) => {
  return $.ajax({
    method: "patch",
    url: `/api/sources/${source.id}`,
    data: {source},
    error: err => console.log(err)
  })
}