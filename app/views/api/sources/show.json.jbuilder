json.source do
  json.partial! '/api/sources/source', source: @source

end

@source.articles.includes(:source).each do |article|
  json.articles do 
    json.set! article.id do
      json.partial! 'api/articles/article', article: article
    end
  end
end