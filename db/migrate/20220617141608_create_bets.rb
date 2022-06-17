class CreateBets < ActiveRecord::Migration[6.1]
  def change
    create_table :bets do |t|
      t.integer :user_id
      t.integer :player_id
      t.boolean :win
      t.float :price
      t.string :odds
      t.string :description
      t.float :current_bets

      t.timestamps
    end
  end
end
