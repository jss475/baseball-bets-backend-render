class UserBetSerializer < ActiveModel::Serializer
  attributes :id, :money_bet, :winnings

  has_one :user
  has_one :bet
end
