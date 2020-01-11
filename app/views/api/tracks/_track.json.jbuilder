json.extract! track, :id, :private, :title, :account_id, :description, :created_at
json.photoUrl url_for(track.photo) if track.photo.attached?
json.trackUrl url_for(track.track_file) if track.track_file.attached?