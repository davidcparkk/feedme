class Article < ApplicationRecord
  validates :body, :title, presence:true

  belongs_to :source,
  primary_key: :id,
  foreign_key: :source_id,
  class_name: :Source

  has_many :feeds,
  through: :source,
  source: :feeds

  has_many :users,
  through: :feeds,
  source: :user
end
