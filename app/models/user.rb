class User < ApplicationRecord
  has_secure_password
  has_many :user_bets
  has_many :bets, through: :user_bets

  validates :username, uniqueness: true, presence: true

  def has_enough_money?(bet)
    money >= bet.to_f
  end
end
