class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :team_name, :image, :stats, :current_bets
end
