# spec/models/comment_spec.rb

require 'rails_helper'

RSpec.describe Comment, type: :model do
  let!(:user) { create(:user) }
  it 'has a valid factory' do
    comment = create(:comment, user_id: user.id)
    expect(comment).to be_valid
  end

  context 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_one_attached(:image) }
  end
end
