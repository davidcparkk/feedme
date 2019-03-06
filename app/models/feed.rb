class Feed < ApplicationRecord
  validates :feed_title, :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :feedSourceItems,
  primary_key: :id,
  foreign_key: :feed_id,
  class_name: :FeedSourceItem

  has_many :sources,
  through: :feedSourceItems,
  source: :source

  
end
