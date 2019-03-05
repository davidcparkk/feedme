class FeedSourceItem < ApplicationRecord
  validates :feed_id, :feed_id, presence:true

  belongs_to :feed,
  primary_key: :id,
  foreign_key: :feed_id,
  class_name: :Feed

  belongs_to :source,
  primary_key: :id,
  foreign_key: :source_id,
  class_name: :Source
end
