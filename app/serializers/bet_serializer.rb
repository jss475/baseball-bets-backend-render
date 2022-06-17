class BetSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :player_id, :win, :price, :odds, :description, :current_bets
end
