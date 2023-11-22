class PostRepository
  def index
    Post.includes(:user).order(created_at: :desc).all
  end

  def create(post_params)
    Post.new(post_params)
  end

  def show(id)
    Post.find(id)
  end
end
