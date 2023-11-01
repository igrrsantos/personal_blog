class CreateLikes < ActiveRecord::Migration[7.1]
  def up
    create_table :likes do |t|
      t.string :name
      t.references :likeable, polymorphic: true, index: true
      t.timestamps
    end
  end

  def down
    drop_table :likes
  end
end
