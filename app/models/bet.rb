class Bet < ApplicationRecord
  belongs_to :player
  has_many :user_bets
  has_many :bbusers, through: :user_bets

  validates :price, presence: true, numericality: true
  validates :odds, presence: true
  validates :description, presence: true
end
