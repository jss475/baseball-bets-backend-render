# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Creating users
puts "Creating users..."

5.times do
  User.create(name: Faker::Name.name, 
              username: Faker::Internet.username, 
              password_digest: Faker::Internet.password, 
              money: rand(1..100), 
              winnings: rand(1..100)
             )
end

puts "Done creating users!"

#Creating players

puts "Creating players..."
Player.create(name: "Shohei Ohtani", team_name: "LA Angels", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png",stats: [0.260,15,45,3.1], current_bets: 0)
Player.create(name: "Francisco Lindor", team_name: "NY Mets", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32129.png&w=350&h=254", stats: [0.243,11,52,1.7], current_bets: 0)
Player.create(name: "Pete Alonso", team_name: "NY Mets", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/37498.png", stats: [0.282,20,66,1.8], current_bets: 0)
Player.create(name: "Jeff McNeil", team_name: "NY Mets", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33900.png", stats: [0.327,4,33,2.4], current_bets: 0)
Player.create(name: "Eduardo Escobar", team_name: "NY Mets", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30272.png&w=350&h=254", stats: [0.231,6,29,0.1], current_bets: 0)
Player.create(name: "Mark Canha", team_name: "NY Mets", image: "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fheadshots%2Fmlb%2Fplayers%2Ffull%2F31670.png", stats: [0.286,5,27,1.1], current_bets: 0)
Player.create(name: "Brandon Nimmo", team_name: "NY Mets", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32159.png", stats: [0.268,4,22,1.9], current_bets: 0)
Player.create(name: "Starling Marte", team_name: "NY Mets", 
  image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30830.png", stats: [0.278,7,36,1.8], current_bets: 0)
Player.create(name: "J.D. Davis", team_name: "NY Mets", 
    image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33796.png", stats: [0.246,2,14,-0.2], current_bets: 0)
Player.create(name: "Tomás Nido", team_name: "NY Mets", 
  image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36068.png", stats: [0.219,0,13,-0.5], current_bets: 0)
Player.create(name: "Mike Trout", team_name: "LA Angels", 
  image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30836.png", stats: [0.284,21,43,3.9], current_bets: 0)



puts "Done creating players"

#Creating bets
puts "Creating bets..."

Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits 2 HRs", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits for the cycle", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Throws out a runner at home plate", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits 1HR", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits 2 doubles", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits a triple", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Steals a base", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Steals two bases", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Records 2RBIs", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits a homerun before the 3rd inning", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Rounds the bases in under 20 seconds", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Helps turn a double play", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Commits no fielding errors", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Helps turn a triple play", current_bets: 0)
Bet.create(player_id: Player.ids.sample, win: Faker::Boolean.boolean, price: rand(1..100), odds: rand(2..50), description: "Hits a HR over 430ft", current_bets: 0)

puts "Done creating bets!"

#Creating user bets

puts "Creating UserBets"
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
UserBet.create(user_id: User.ids.sample, bet_id: Bet.ids.sample, money_bet: rand(10..1000))
puts "Done creating userbets!"
