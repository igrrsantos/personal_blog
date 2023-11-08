class AddNameToUsers < ActiveRecord::Migration[7.1]
  def up
    add_column :users, :name, :string, null: false
  end

  def down
    remove_column :users, :name
  end
end
