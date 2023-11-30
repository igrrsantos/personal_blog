# spec/repositories/post_repository_spec.rb

require 'rails_helper'
require 'rspec/mocks'

RSpec.describe PostRepository, type: :repository do
  let(:post_repository) { PostRepository.new }

  describe '#index' do
    it 'returns posts with users ordered by created_at descending' do
      user = create(:user)
      post1 = create(:post, user: user)
      post2 = create(:post, user: user)

      expected_result = [post2, post1]

      expect(post_repository.index).to eq(expected_result)
    end
  end

  describe '#create' do
    let(:user) { create(:user) }
    let(:post_params) { { content: 'Example Content', user_id: user.id } }

    it 'creates a new post with the given parameters' do
      expect(post_repository.create(post_params)).to be_a(Post)
    end
  end

  describe '#show' do
    let(:user) { create(:user) }
    let(:post) { create(:post, user_id: user.id) }

    it 'returns the post with the given id' do
      expect(post_repository.show(post.id)).to eq(post)
    end
  end
end
