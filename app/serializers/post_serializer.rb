class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at
  belongs_to :user, only: %i[id name]
end
