json.partial! "api/users/user", user: @user
json.authoredTrackIds @user.tracks.pluck(:id)