@feed_source_items.each do |feed_source_item|
  json.set! feed_source_item.id do
    json.partial! 'feed_source_item', feed_source_item:feed_source_item
  end
end