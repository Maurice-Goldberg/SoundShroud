require 'open-uri'

Track.destroy_all
User.destroy_all

demouser = User.create({account_name: "Demo User", email: "demouser@gmail.com", password: "password123"})

opn = User.create({account_name: "Oneohtrix Point Never", email: "opn@aol.com", password: "gardenofdelete"})
charli_xcx = User.create({account_name: "Charli XCX", email: "itscharlibaby@hotmail.com", password:"xcxcharli"})
caroline_polachek = User.create({account_name: "Caroline Polachek", email: "carolinep@gmail.com", password: "intomepang"})
depeche_mode = User.create({account_name: "Depeche Mode", email: "dpmode@gmail.com", password: "neverletmedown"})
janet_jackson = User.create({account_name: "Janet Jackson", email: "jjackson@gmail.com", password: "controller"})
sunspeaker = User.create({account_name: "Sunspeaker", email: "sunspeaker@gmail.com", password: "ghjlrspm"})
dorian_electra = User.create({account_name: "Dorian Electra", email: "dorian@gmail.com", password: "adamandsteve"})
floating_points = User.create({account_name: "Floating Points", email: "floatingp@gmail.com", password: "anasickmodular"})
peter_gabriel = User.create({account_name: "Peter Gabriel", email: "peterg@gmail.com", password: "excellentbirds"})
kate_bush = User.create({account_name: "Kate Bush", email: "kateb@gmail.com", password: "houndsoflove"})
hunnid_gecs = User.create({account_name: "100 Gecs", email: "gecgecgec@gmail.com", password: "800dbcloud"})
tim_hecker = User.create({account_name: "Tim Hecker", email: "timhecker@gmail.com", password: "konoyo4"})
galen_tipton = User.create({account_name: "Galen Tipton", email: "galentipton@gmail.com", password: "fakemeat"})


chrome_country = Track.create({
  private: false,
  title: "Chrome Country",
  account_id: opn.id,
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
  account_id: caroline_polachek.id,
  description: "The new dark art-pop track from the former singer of Chairlift"
})
ocean_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/ocean.jpg')
ocean.photo.attach(io: ocean_cover, filename: 'ocean.jpg')
ocean_track = open('https://soundshroud000-seeds.s3.amazonaws.com/ocean_of_tears.mp3')
ocean.track_file.attach(io: ocean_track, filename: 'ocean_of_tears.mp3')


stripped = Track.create({
  private: false,
  title: "Stripped",
  account_id: depeche_mode.id,
  description: "From Depeche Mode's under-appreciated album 'Black Celebration'"
})
stripped_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/stripped.jpg')
stripped.photo.attach(io: stripped_cover, filename: 'stripped.jpg')
stripped_track = open('https://soundshroud000-seeds.s3.amazonaws.com/stripped.mp3')
stripped.track_file.attach(io: stripped_track, filename: 'stripped.mp3')

control = Track.create({
  private: false,
  title: "Control",
  account_id: janet_jackson.id,
  description: "The standout song that birthed the classic 80's genre of 'New Jack Swing'"
})
control_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/control.jpg')
control.photo.attach(io: control_cover, filename: 'control.jpg')
control_track = open('https://soundshroud000-seeds.s3.amazonaws.com/control.mp3')
control.track_file.attach(io: control_track, filename: 'control.mp3')

# dark_cartoon = Track.create({
#   private: false,
#   title: "Dark Cartoon",
#   account_id: sunspeaker.id,
#   description: "A fairly unknown song by a fairly unknown artist"
# })
# dark_cartoon_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/dark_cartoon.jpg')
# dark_cartoon.photo.attach(io: dark_cartoon_cover, filename: 'dark_cartoon.jpg')
# dark_cartoon_track = open('https://soundshroud000-seeds.s3.amazonaws.com/dark_cartoon.wav')
# dark_cartoon.track_file.attach(io: dark_cartoon_track, filename: 'dark_cartoon.wav')

flamboyant = Track.create({
  private: false,
  title: "Flamboyant",
  account_id: dorian_electra.id,
  description: "The powerful new banger from genderqueer wunderkind Dorian Electra"
})
flamboyant_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/flamboyant.jpg')
flamboyant.photo.attach(io: flamboyant_cover, filename: 'flamboyant.jpg')
flamboyant_track = open('https://soundshroud000-seeds.s3.amazonaws.com/flamboyant.mp3')
flamboyant.track_file.attach(io: flamboyant_track, filename: 'flamboyant.mp3')

last_bloom = Track.create({
  private: false,
  title: "Last Bloom",
  account_id: floating_points.id,
  description: "A dark and frantic dance track from U.K.-based modular wizard Floating Points"
})
last_bloom_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/last_bloom.jpg')
last_bloom.photo.attach(io: last_bloom_cover, filename: 'last_bloom.jpg')
last_bloom_track = open('https://soundshroud000-seeds.s3.amazonaws.com/last_bloom.mp3')
last_bloom.track_file.attach(io: last_bloom_track, filename: 'last_bloom.mp3')

mercy_street = Track.create({
  private: false,
  title: "Mercy Street",
  account_id: peter_gabriel.id,
  description: "The soothing and contemplative song by 80s sophisti-pop weirdo Peter Gabriel"
})
mercy_street_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/mercy_street.jpg')
mercy_street.photo.attach(io: mercy_street_cover, filename: 'mercy_street.jpg')
mercy_street_track = open('https://soundshroud000-seeds.s3.amazonaws.com/mercy_street.mp3')
mercy_street.track_file.attach(io: mercy_street_track, filename: 'mercy_street.mp3')

running_up_that_hill = Track.create({
  private: false,
  title: "Running Up That Hill",
  account_id: kate_bush.id,
  description: "The stormy, legendary earworm by Kate Bush, art-pop's mystical sound witch"
})
running_up_that_hill_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/running_up_that_hill.jpg')
running_up_that_hill.photo.attach(io: running_up_that_hill_cover, filename: 'running_up_that_hill.jpg')
running_up_that_hill_track = open('https://soundshroud000-seeds.s3.amazonaws.com/running_up_that_hill.mp3')
running_up_that_hill.track_file.attach(io: running_up_that_hill_track, filename: 'running_up_that_hill.mp3')

hand_crushed_by_a_mallet = Track.create({
  private: false,
  title: "Hand Crushed By a Mallet",
  account_id: hunnid_gecs.id,
  description: "The strange and inscrutable banger from emo-electro-pop newcomers 100 Gecs"
})
hand_crushed_by_a_mallet_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/hand_crushed_by_a_mallet.jpg')
hand_crushed_by_a_mallet.photo.attach(io: hand_crushed_by_a_mallet_cover, filename: 'hand_crushed_by_a_mallet.jpg')
hand_crushed_by_a_mallet_track = open('https://soundshroud000-seeds.s3.amazonaws.com/hand_crushed_by_a_mallet.mp3')
hand_crushed_by_a_mallet.track_file.attach(io: hand_crushed_by_a_mallet_track, filename: 'hand_crushed_by_a_mallet.mp3')

that_world = Track.create({
  private: false,
  title: "That World",
  account_id: tim_hecker.id,
  description: "A meditative ambient track from producer Tim Hecker"
})
that_world_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/that_world.jpg')
that_world.photo.attach(io: that_world_cover, filename: 'that_world.jpg')
that_world_track = open('https://soundshroud000-seeds.s3.amazonaws.com/that_world.mp3')
that_world.track_file.attach(io: that_world_track, filename: 'that_world.mp3')

touch = Track.create({
  private: false,
  title: "Touch",
  account_id: galen_tipton.id,
  description: "A frantic and expansive electronic piece from producer and visual artist Galen Tipton"
})
touch_cover = open('https://soundshroud000-seeds.s3.amazonaws.com/touch.jpg')
touch.photo.attach(io: touch_cover, filename: 'touch.jpg')
touch_track = open('https://soundshroud000-seeds.s3.amazonaws.com/touch.mp3')
touch.track_file.attach(io: touch_track, filename: 'touch.mp3')