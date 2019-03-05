class Source < ApplicationRecord
  has_many :feedSourceItems,
  primary_key: :id,
  foriegn_key: :source_id,
  class_name: :FeedSourceItem

  has_many :feeds,
  through: :feedSourceItems,
  source: :feed
end
