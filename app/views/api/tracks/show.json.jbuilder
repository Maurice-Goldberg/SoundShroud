json.track do
  json.partial! "api/tracks/track", track: @track
end

json.user do 
  json.partial! "api/users/user", user: @track.author
end