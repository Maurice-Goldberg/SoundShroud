# Database Schema

## Users:
* id
* account_name
* email
* password_digest
* session_token
* created_at
* updated_at
    * _index on account_name, unique: true_
    * _index on email, unique: true_
    * _index on session_token, unique: true_


## Tracks:
* id
* author_id
* created_at
* updated_at
    * _author_id references users_
    * _index on author_id_


## Likes:
* id
* user_id
* track_id
* created_at
* updated_at
    * _user_id references users_
    * _index on user_id_
    * _track_id references tracks_
    * _index on track_id_

## Reposts:
* id
* user_id
* track_id
* created_at
* updated_at
    * _user_id references users_
    * _index on user_id_
    * _track_id references tracks_
    * _index on track_id_

## Follows:
* id
* user_id
* created_at
* updated_at
    * _user_id references users_
    * _index on user_id_