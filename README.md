# [SoundShroud](http://soundshroud000.herokuapp.com/#/)

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
- The user first arrives on a sleek welcome page with a sampling of songs displayed, accompanied by prompts to sign in or create a new account
- Splash page hero banner uses smooth carousel display
- Splash page showcases a sample of songs from the SoundShroud database that the user can play before logging in or signing up

### User Authentication
- The user can sign up for a new account through a modal form
![Sign up modal](gifs/create_acc_modal.gif)

- The user can sign in as a demo user for quick access to the site's core features
![Sign in modal](gifs/sign_in_modal.gif)

- Robust error handling for invalid email format, invalid email/password combination, and empty text fields
![Errors](gifs/auth_errors.gif)

- The user can log in to a pre-existing demo account
![Demo login](gifs/demo_login.gif)

- Re-routes user from create account modal to sign in modal if a pre-existing email is entered
- Re-routes user from sign in modal to create account modal if a new email is entered

### Discover Page
- Upon signing in, the user arrives on a show page of currently trending tracks, as well as a set of artists to check out, curated by the site
- The page displays tracks of interest in both horizontal and vertical scrollable displays

### Song CRUD Functionality (Create/Read/Update/Destroy)
- Create: the user can upload new songs through an upload form
- Read: the user can view all public songs through individual song pages
- Update: the user can edit their own song's information (title, description, and cover art)
- Destroy: the user can remove songs from their account

### Audio Streaming
- The user can play songs via audio players located throughout the site (splash page, discover page, individual song pages, profile pages)
- The individual track pages each display an aesthetically pleasing waveform representing the individual song's changes in volume over time

### Persistent Song Bar
- The user can continuously listen to music through an audio player footer as they navigate from page to page
- The song bar has play, pause, scrolling, song skip, and song restart functionality
- The song's progress in time is directly mimicked by the display of the individual song page's audio player

### Profile Page
- The user profile page displays all posted tracks
- The user can view other users' profile pages
- The user can upload or update their own profile picture
- The user can edit or delete their own tracks from their profile page
