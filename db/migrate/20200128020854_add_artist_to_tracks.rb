class AddArtistToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :artist, :string, null: false
  end
end
