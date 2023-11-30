FactoryBot.define do
  factory :comment do
    content { Faker::Movies::HarryPotter.quote }
  end
end
