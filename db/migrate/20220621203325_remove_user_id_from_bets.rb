class RemoveUserIdFromBets < ActiveRecord::Migration[6.1]
  def change
    remove_column :bets, :user_id
  end
end
