class CreateReposts < ActiveRecord::Migration[5.2]
  def change
    create_table :reposts do |t|
      t.integer :user_id
      t.integer :track_id

      t.timestamps
    end

    add_index :reposts, [:user_id, :track_id]  
  end
end
