class ChangeWinningsDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :winnings, :float, default: 0.00
  end
end
