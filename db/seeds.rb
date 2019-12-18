require 'open-uri'

Track.destroy_all
User.destroy_all

demouser = User.create({account_name: "Demo User", email: "demouser@gmail.com", password: "password123"})

oneohtrix = User.create({account_name: "Oneohtrix Point Never", email: "opn@aol.com", password: "gardenofdelete"})
charli_xcx = User.create({account_name: "Charli XCX", email: "itscharlibaby@hotmail.com", password:"xcxcharli"})
caroline = User.create({account_name: "Caroline Polachek", email: "carolinep@gmail.com", password: "intomepang"})


chrome_country = Track.create({
  private: false,
  title: "Chrome Country",
  account_id: oneohtrix.id,
  description: "Track 8 on R+7",
})
chrome_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/chrome_country.jpg')
chrome_country.photo.attach(io: chrome_cover, filename: 'chrome_country.jpg');
chrome_track = open('https://soundshroud000-seeds.s3.amazonaws.com/chrome_country.mp3')
chrome_country.track_file.attach(io: chrome_track, filename: 'chrome_country.mp3')

gone = Track.create({
  private: false,
  title: "Gone",
  account_id: charli_xcx.id,
  description: "Track 3 on Charli (self-titled)"
})
gone_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/gone.jpg')
gone.photo.attach(io: gone_cover, filename: 'gone.jpg')
gone_track = open('https://soundshroud000-seeds.s3.amazonaws.com/gone.mp3')
gone.track_file.attach(io: gone_track, filename: 'gone.mp3')

ocean = Track.create({
  private: false,
  title: "Ocean of Tears",
  account_id: caroline.id,
  description: "The new, dark art-pop track from the former singer of Chairlift"
})
ocean_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/ocean.jpg')
ocean.photo.attach(io: ocean_cover, filename: 'ocean.jpg')
ocean_track = open('https://soundshroud000-seeds.s3.amazonaws.com/ocean_of_tears.mp3')
ocean.track_file.attach(io: ocean_track, filename: 'ocean_of_tears.mp3')