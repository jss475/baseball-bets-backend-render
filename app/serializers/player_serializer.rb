class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :team_name, :image, :stats, :current_bets

  has_many :bets
  has_many :user_bets
end
