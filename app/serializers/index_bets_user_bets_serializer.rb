class IndexBetsUserBetsSerializer < ActiveModel::Serializer

  attributes :id, :money_bet

  belongs_to :user, serializer: IndexBetsUserBetsUserSerializer
end

