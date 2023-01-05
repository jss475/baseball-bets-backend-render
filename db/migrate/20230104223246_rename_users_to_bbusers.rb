class RenameUsersToBbusers < ActiveRecord::Migration[6.1]
  def change
    rename_table :users, :bbusers
  end
end
