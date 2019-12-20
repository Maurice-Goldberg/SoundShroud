# [SoundShroud](http://soundshroud000.herokuapp.com/#/discover)

SoundShroud is my dark-mode clone of [SoundCloud](https://soundcloud.com/discover), the popular audio streaming platform. In developing this clone, I looked to exactly replicate the core functionality of the app while reconceptualizing its color scheme to be more aesthetically pleasing.

The following technologies were used:
- React-Redux (front-end)
- Ruby on Rails (back-end)
- AJAX (front-end to back-end communication)
- PostgreSQL (database storage)
- AWS S3 (data hosting)
- Heroku (domain hosting)

## Features

### Splash Page
- User first arrives on a sleek welcome page with a sampling of songs displayed, accompanied by prompts to sign in or create a new account

### Discover Page

### User Authentication
- User can log in to a pre-existing account through a modal form
- User can sign up for a new account through a modal form
- User can sign in as a demo user for quick access to the site's core features

### Song CRUD Functionality (Create/Read/Update/Destroy)
- Create: User can upload new songs through an upload form
- Read: User can view all public songs through individual song pages
- Update: User can edit their own song's information (title, description, and cover art)
- Destroy: User can remove songs from their account

### Audio Streaming
- User can play songs via audio players located throughout the site (splash page, discover page, individual song pages)
- Audio player has song scrolling, song skip, and song restart functionality
- Audio player displays an aesthetically pleasing waveform representing the song's changes in volume changes over time

### Persistent Song Bar
