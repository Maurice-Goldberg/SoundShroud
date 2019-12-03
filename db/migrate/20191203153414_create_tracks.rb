class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :author_id

      t.timestamps
    end

    add_index :tracks, :author_id
  end
end
