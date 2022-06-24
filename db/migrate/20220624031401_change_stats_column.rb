class ChangeStatsColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :players, :stats
    add_column :players, :stats, :float, array: true, default: []
  end
end
