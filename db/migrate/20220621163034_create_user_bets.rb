class CreateUserBets < ActiveRecord::Migration[6.1]
  def change
    create_table :user_bets do |t|
      t.integer :user_id
      t.integer :bet_id
      t.float :money_bet
      t.timestamps
    end
  end
end
