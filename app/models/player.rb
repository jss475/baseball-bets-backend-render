class Player < ApplicationRecord
    has_many :bets
    has_many :user_bets, through: :bets
end
