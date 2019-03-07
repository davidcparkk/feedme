json.feed do
  json.partial! '/api/feeds/feed', feed: @feed
end

@feed.articles.each do |article|
  json.articles do 
    json.set! article.id do
      json.partial! 'api/articles/article', article: article
    end
  end
end