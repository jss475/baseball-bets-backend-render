class IndexBetsUserBetsSerializer < ActiveModel::Serializer
  attributes :id, :money_bet

  belongs_to :bbuser, serializer: IndexBetsUserBetsUserSerializer
end
