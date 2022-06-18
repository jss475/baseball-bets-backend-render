class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :money, :winnings
end
