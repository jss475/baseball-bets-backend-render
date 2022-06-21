class UserBet < ApplicationRecord
    belongs_to :user
    belongs_to :bet

    validates :user_id, presence: true, numericality: true
    validates :bet_id, presence: true, numericality: true

  def winnings

   current_bets = bet.current_bets + money_bet
    
   bet.update!(current_bets: current_bets)

   if bet.win
     payout = money_bet * bet.odds
     money = user.money + payout
     winnings = user.winnings + payout
   else
     money = user.money - money_bet
     winnings = user.winnings - money_bet 
   end
    
   user.update!(money: money, winnings: winnings)

  end   

end
