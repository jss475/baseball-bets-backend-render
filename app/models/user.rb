class User < ApplicationRecord
    has_secure_password
    has_many :user_bets
    has_many :bets, through: :user_bets
    
    validates :username, uniqueness: true, presence: true
end
