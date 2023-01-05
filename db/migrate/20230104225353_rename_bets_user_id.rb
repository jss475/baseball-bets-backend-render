class RenameBetsUserId < ActiveRecord::Migration[6.1]
  def change
    add_column :bets, :bbuser_id, :integer
  end
end
