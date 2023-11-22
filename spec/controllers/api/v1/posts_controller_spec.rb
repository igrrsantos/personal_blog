require 'rails_helper'

module Api
  module V1
    RSpec.describe PostsController, type: :controller do
      describe 'GET #index' do
        let!(:user) { create(:user) }
        let(:posts) { create_list(:post, 3, user_id: user.id) }

        it 'returns a successful response' do
          get :index
          expect(response).to have_http_status(:success)
        end

        it 'assigns @posts with the posts from post_service.index' do
          allow_any_instance_of(PostService).to receive(:index).and_return(posts)
          get :index
          expect(assigns(:posts)).to eq(posts)
        end

        it 'renders JSON with the posts from post_service.index' do
          allow_any_instance_of(PostService).to receive(:index).and_return(posts)
          get :index
          expected_response = posts.map { |post| post.attributes.except('created_at', 'updated_at', 'user_id') }
          json = JSON.parse(response.body)
          json.each do |post|
            post.delete('user')
            post.delete('created_at')
          end
          expect(json).to eq(expected_response)
        end
      end

      describe 'GET #show' do
        let!(:user) { create(:user) }
        let(:post) { create(:post, user_id: user.id) }

        it 'returns a successful response' do
          get :show, params: { id: post.id }
          expect(response).to have_http_status(:success)
        end

        it 'assigns @post with the post from post_service.show' do
          allow_any_instance_of(PostService).to receive(:show).and_return(post)
          get :show, params: { id: post.id }
          expect(assigns(:post)).to eq(post)
        end

        it 'renders JSON with the post from post_service.show' do
          allow_any_instance_of(PostService).to receive(:show).and_return(post)
          get :show, params: { id: post.id }
          expected_response = post.attributes.except('created_at', 'updated_at', 'user_id')
          json = JSON.parse(response.body)
          json.delete('user')
          json.delete('created_at')
          expect(json).to eq(expected_response)
        end
      end
    end
  end
end
