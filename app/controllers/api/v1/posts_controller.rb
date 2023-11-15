module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show update destroy]

      def index
        @posts = post_service.index

        render json: @posts
      end

      def show
        render json: @post
      end

      def create
        # adding a comment to test ci
        @post = post_service.create(post_params)

        if @post.save
          render json: @post, status: :created
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      def update
        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @post.destroy!
      end

      private

      def post_service
        @post_service ||= PostService.new
      end

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:content, :user_id)
      end
    end
  end
end
