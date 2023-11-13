class PostService
  def index
    post_repository.index
  end

  def create(params)
    post_repository.create(params)
  end

  private

  def post_repository
    @post_repository ||= PostRepository.new
  end
end
