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

      describe 'POST #create' do
        let!(:user) { create(:user) }
        context 'with valid attributes' do
          it 'creates a new post' do
            expect {
              post :create, params: { post: attributes_for(:post, user_id: user.id) }
            }.to change(Post, :count).by(1)
          end

          it 'returns a created status' do
            post :create, params: { post: attributes_for(:post, user_id: user.id) }
            expect(response).to have_http_status(:created)
          end
        end

        context 'with invalid attributes' do
          it 'does not save the new post' do
            expect {
              post :create, params: { post: attributes_for(:post, content: nil) } # assuming content is required
            }.to_not change(Post, :count)
          end

          it 'returns unprocessable entity status' do
            post :create, params: { post: attributes_for(:post, content: nil) } # assuming content is required
            expect(response).to have_http_status(:unprocessable_entity)
          end
        end
      end

      describe 'DELETE #destroy' do
        let!(:user) { create(:user) }
        let(:post) { create(:post, user_id: user.id) } # cria um post antes de cada teste

        context 'with existing post' do
          it 'deletes the post' do
            expect {
              delete :destroy, params: { id: post.id }
            }.to change(Post, :count).by(0)
          end

          it 'returns a no content status' do
            delete :destroy, params: { id: post.id }
            expect(response).to have_http_status(:no_content)
          end
        end

        context 'with non-existing post' do
          it 'raises a RecordNotFound error' do
            expect {
              delete :destroy, params: { id: -1 } # assumindo que -1 é um id inválido
            }.to raise_error(ActiveRecord::RecordNotFound)
          end
        end
      end

      describe 'PATCH #update' do
        let!(:user) { create(:user) }
        let(:post) { create(:post, user_id: user.id) } # cria um post antes de cada teste
        context 'with valid attributes' do
          it 'updates a post' do
            patch :update, params: { id: post.id, post: attributes_for(:post, user_id: user.id, content: 'teste') }
            json = JSON.parse(response.body)
            json.delete('user')
            json.delete('created_at')
            expect(json).to eq(
              {
                'id' => post.id,
                'content' => 'teste'
              }
            )
          end

          it 'returns a updated status' do
            patch :update, params: { id: post.id, post: attributes_for(:post, user_id: user.id, content: 'teste') }
            expect(response).to have_http_status(:ok)
          end
        end
      end
    end
  end
end
