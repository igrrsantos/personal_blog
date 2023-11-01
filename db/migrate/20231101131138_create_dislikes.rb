class CreateDislikes < ActiveRecord::Migration[7.1]
  def up
    create_table :dislikes do |t|
      t.string :name
      t.references :dislikeable, polymorphic: true, index: true
      t.timestamps
    end
  end

  def down
    drop_table :dislikes
  end
end
