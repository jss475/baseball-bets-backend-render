class ChangeMoneyDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :bbusers, :money, :float, default: 0.00
  end
end
