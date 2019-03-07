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

@feed.sources.includes(:feeds).each do |source|
  json.sources do 
    json.set! source.id do
      json.partial! 'api/sources/source', source: source
    end
  end
end