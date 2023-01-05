class CreateBbusers < ActiveRecord::Migration[6.1]
  def change
    create_table :bbusers do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.float :money
      t.float :winnings

      t.timestamps
    end
  end
end
