class UserBetsChangeCol < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_bets, :user_id, :bbuser_id
  end
end
