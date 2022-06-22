class BetSerializer < ActiveModel::Serializer
  attributes :id, :win, :price, :odds, :description, :current_bets

  belongs_to :player
  has_many :user_bets, serializer: IndexBetsUserBetsSerializer
end
