require 'rails_helper'

module Api
  module V1
    RSpec.describe Post, type: :request do
      let!(:user) { create(:user) }

      describe 'GET /api/v1/posts' do
        subject(:index_posts) { get '/api/v1/posts' }

        let!(:posts) { create_list(:post, 3, user_id: user.id) }

        context 'When call index route from posts' do
          it 'Return Posts with User' do
            index_posts
            json = JSON.parse(response.body)
            json.each do |a|
              a.delete('created_at')
              a['user'].delete('created_at')
              a['user'].delete('updated_at')
            end
            expect(response.status).to eq(200)
            expect(json.size).to eq(3)
            expect(json.last).to eq(
              {
                'id' => posts.first.id,
                'content' => posts.first.content,
                'user' => { 'id' => user.id, 'name' => user.name, 'email' => user.email }
              }
            )
          end
        end
      end

      describe 'POST /api/v1/posts' do
        subject(:create_post) do
          post '/api/v1/posts',
              params: params
        end

        let!(:params) do
          {
            post: {
              content: 'teste',
              user_id: user.id
            }
          }
        end

        context 'When call index route from posts' do
          it 'Return Posts with User' do
            create_post
            post = Post.first
            json = JSON.parse(response.body)
            json.delete('created_at')
            json['user'].delete('created_at')
            json['user'].delete('updated_at')
            expect(response.status).to eq(201)
            expect(json).to eq(
              {
                'id' => post.id,
                'content' => post.content,
                'user' => {
                  'id' => user.id,
                  'email' => user.email,
                  'name' => user.name
                }
              }
            )
          end
        end
      end
    end
  end
end
