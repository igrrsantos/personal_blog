class CreateComments < ActiveRecord::Migration[7.1]
  def up
    create_table :comments do |t|
      t.text :content, limit: 244
      t.timestamps
    end
  end

  def down
    drop_table :comments
  end
end
