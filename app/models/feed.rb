class Feed < ApplicationRecord
  validates :feed_title, :user_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :feedSourceItems,
  primary_key: :id,
  foriegn_key: :feed_id,
  class_name: :FeedSourceItem

  has_many :sources,
  through: :feedSourceItems,
  source: :source
end
