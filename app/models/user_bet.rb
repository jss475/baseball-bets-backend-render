class UserBet < ApplicationRecord
    belongs_to :user
    belongs_to :bet

    validates :user_id, presence: true, numericality: true
    validates :bet_id, presence: true, numericality: true
    
end
