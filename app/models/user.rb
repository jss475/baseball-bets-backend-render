class User < ApplicationRecord
    has_many :bets
    has_many :players, through: :bets

    has_secure_password
    validates :username, uniqueness: true, presence: true
end
