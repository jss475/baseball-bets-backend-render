class UserBet < ApplicationRecord
    belongs_to :user
    belongs_to :bet

    validates :user_id, presence: true, numericality: true
    validates :bet_id, presence: true, numericality: true

    # this happens on the create method
  def winnings

   current_bets = bet.current_bets.to_f + money_bet.to_f
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

  # this occurs on the delete method. We switch signs because we did all this stuff in winnings method
  def remove_winnings

    current_bets = bet.current_bets.to_f - money_bet.to_f
    bet.update!(current_bets: current_bets)

    if bet.win
      payout = money_bet * bet.odds
      money = user.money - payout
      winnings = user.winnings - payout
    else
      money = user.money + money_bet
      winnings = user.winnings + money_bet 
    end
    user.update!(money: money, winnings: winnings)
  end

  def message 
    
    if bet.win
      'you hit it out of the park'

    else
      'swing and a miss'
    end

  end

end
