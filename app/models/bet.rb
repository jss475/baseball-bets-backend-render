class Bet < ApplicationRecord
    belongs_to :player
    belongs_to :user

    validates :price, presence: true, numericality: true
    validates :odds, presence: true
    validates :description, presence: true
end
