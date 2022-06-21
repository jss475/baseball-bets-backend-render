class Bet < ApplicationRecord
    belongs_to :player
    belongs_to :user
    has_many :user_bets

    validates :price, presence: true, numericality: true
    validates :odds, presence: true
    validates :description, presence: true
end
