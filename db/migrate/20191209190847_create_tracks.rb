class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.boolean :private, null: false
      t.string :title, null: false
      t.integer :account_id, null: false
      t.string :description
      t.timestamps
    end
    add_index :tracks, [:title, :account_id], unique: true
  end
end
