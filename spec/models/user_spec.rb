# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to have_one_attached(:image) }
end
