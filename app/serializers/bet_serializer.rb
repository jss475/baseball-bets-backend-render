class BetSerializer < ActiveModel::Serializer
  attributes :id, :win, :price, :odds, :description, :current_bets
  belongs_to :player
end
