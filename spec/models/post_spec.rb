# spec/models/post_spec.rb

require 'rails_helper'

RSpec.describe Post, type: :model do
  let!(:user) { create(:user) }
  it 'has a valid factory' do
    post = create(:post, user_id: user.id)
    expect(post).to be_valid
  end

  context 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_one_attached(:image) }
  end
end
