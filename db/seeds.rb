# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Creating users
puts "Creating users..."

User.create(name: Faker::Name.name, username: Faker::Internet.username, password: Faker::Internet.password, money: rand(1..100), winnings: rand(1..100))
User.create(name: Faker::Name.name, username: Faker::Internet.username, password: Faker::Internet.password, money: rand(1..100), winnings: rand(1..100))
User.create(name: Faker::Name.name, username: Faker::Internet.username, password: Faker::Internet.password, money: rand(1..100), winnings: rand(1..100))
User.create(name: Faker::Name.name, username: Faker::Internet.username, password: Faker::Internet.password, money: rand(1..100), winnings: rand(1..100))
User.create(name: Faker::Name.name, username: Faker::Internet.username, password: Faker::Internet.password, money: rand(1..100), winnings: rand(1..100))

puts "Done creating users!"

#Creating players

puts "Creating players..."
Player.create(name: Faker::Name.name, team_name: Faker::Team.name, image: Faker::LoremFlickr.image, stats: "0.300", current_bets: rand(10..100000))
Player.create(name: Faker::Name.name, team_name: Faker::Team.name, image: Faker::LoremFlickr.image, stats: "0.290", current_bets: rand(10..100000))
Player.create(name: Faker::Name.name, team_name: Faker::Team.name, image: Faker::LoremFlickr.image, stats: "0.280", current_bets: rand(10..100000))
Player.create(name: Faker::Name.name, team_name: Faker::Team.name, image: Faker::LoremFlickr.image, stats: "0.270", current_bets: rand(10..100000))
Player.create(name: Faker::Name.name, team_name: Faker::Team.name, image: Faker::LoremFlickr.image, stats: "0.260", current_bets: rand(10..100000))
puts "Dont creating players"

#Creating bets
puts "Creating bets..."

Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "50:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))
Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "30:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))
Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "20:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))
Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "10:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))
Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "2:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))
Bet.create(user_id: User.ids.sample, player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: "5:1", description: Faker::Restaurant.description, current_bets: rand(1..10000))

puts "Dont creating bets!"
