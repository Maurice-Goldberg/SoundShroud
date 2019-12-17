# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demouser = User.create({account_name: "Demo User", email: "demouser@gmail.com", password: "password123"});
oneohtrix = User.create({account_name: "Oneohtrix Point Never", email: "opn@aol.com", password: "gardenofdelete"})
charli_xcx = User.create({account_name: "Charli XCX", email: "itscharlibaby@hotmail.com", password:"xcxcharli"})

chrome_country = Track.create({
  private: false,
  title: "Chrome Country",
  account_id: oneohtrix.id,
  description: "Track 8 on R+7",
})

gone = Track.create({
  private: false,
  title: "Gone",
  account_id: charli_xcx.id,
  description: "Track 3 on Charli (self-titled)"
})