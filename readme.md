# Schema

## Users:
* id
* username
* email
* password_digest
* session_token
* created_at
* updated_at
index on username, unique: true
index on email, unique: true
index on session_token, unique: true


## Tracks:
* id
* author_id
* created_at
* updated_at
author_id references users
index on author_id


## Likes:
* id
* user_id
* track_id
* created_at
* updated_at
user_id references users
index on user_id
track_id references tracks
index on track_id


## Follows:
* id
* user_id
* created_at
* updated_at
    * _user_id references users_
    * _index on user_id_