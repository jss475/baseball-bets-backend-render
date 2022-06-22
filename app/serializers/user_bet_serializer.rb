class UserBetSerializer < ActiveModel::Serializer
  attributes :id, :money_bet

  # has_one :user
  has_one :bet, serializer: AddUserBetBetSerializer

end
