@sources.each do |source|
  json.set! source.id do
    json.partial! 'source', source:source
  end
end