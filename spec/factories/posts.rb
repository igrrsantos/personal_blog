FactoryBot.define do
  factory :post do
    content { Faker::Movies::HarryPotter.quote }
  end
end
