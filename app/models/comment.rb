class Comment < ApplicationRecord
  has_one_attached :image
  belongs_to :user
  has_many :likes, as: :likeable
end
