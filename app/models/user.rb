class User < ApplicationRecord
    has_secure_password
    has_many :bets
    has_many :players, through: :bets
    has_many :user_bets
    
    validates :username, uniqueness: true, presence: true
end
