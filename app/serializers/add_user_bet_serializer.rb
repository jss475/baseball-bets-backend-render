class AddUserBetSerializer < ActiveModel::Serializer
  attributes :id, :money_bet, :winnings, :message

  has_one :bet

end
