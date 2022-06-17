class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :team_name
      t.string :image
      t.string :stats
      t.float :current_bets

      t.timestamps
    end
  end
end
