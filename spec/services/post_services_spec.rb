# spec/services/post_service_spec.rb

require 'rails_helper'
require 'rspec/mocks'

RSpec.describe PostService, type: :service do
  let(:post_service) { PostService.new }
  let(:post_repository) { instance_double(PostRepository) }

  before do
    allow(PostRepository).to receive(:new).and_return(post_repository)
  end

  describe '#index' do
    it 'calls index method on post_repository' do
      expect(post_repository).to receive(:index)
      post_service.index
    end
  end

  describe '#create' do
    let(:params) { { title: 'Example Title', content: 'Example Content' } }

    it 'calls create method on post_repository with params' do
      expect(post_repository).to receive(:create).with(params)
      post_service.create(params)
    end
  end

  describe '#show' do
    let(:post_id) { 1 }

    it 'calls show method on post_repository with post_id' do
      expect(post_repository).to receive(:show).with(post_id)
      post_service.show(post_id)
    end
  end
end
