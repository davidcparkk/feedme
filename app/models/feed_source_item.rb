class FeedSourceItem < ApplicationRecord
  belongs_to :feed,
  primary_key: :id,
  foriegn_key: :feed_id,
  class_name: :Feed

  belongs_to :source,
  primary_key: :id,
  foriegn_key: :source_id,
  class_name: :Source
end
