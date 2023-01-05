class BbuserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :money, :winnings

  has_many :user_bets, serializer: UserUserBetsSerializer
end
