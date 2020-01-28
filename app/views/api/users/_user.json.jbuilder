json.extract! user, :id, :account_name, :email, :track_ids, :created_at
json.photoUrl url_for(user.photo) if user.photo.attached?