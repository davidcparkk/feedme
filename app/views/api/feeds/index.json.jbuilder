@feeds.each do |feed|
  json.set! feed.id do
    json.partial! 'feed', feed:feed
    json.sourceIds []
  end
end