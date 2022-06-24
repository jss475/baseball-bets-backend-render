class UserBet < ApplicationRecord
    belongs_to :user
    belongs_to :bet
    #attr_accessor :payout

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

  def update_winnings(prev_bet)
    #check to see if bet is greater than the previous bet
    gt_prev = money_bet > prev_bet.to_f 
    #check to see by how much the bet that is greater than is greater than 
    total = gt_prev ? money_bet - prev_bet.to_f : prev_bet.to_f - money_bet 
    #assign the new value of greater bets accordingingly
    current_bets = gt_prev ? bet.current_bets + total : bet.current_bets - total
    #update current bets
    bet.update!(current_bets: current_bets)
    
    #find the total payout for a winning bet
    payout = money_bet * bet.odds - prev_bet.to_f * bet.odds  

    if bet.win
      money = user.money + payout
      winnings = user.winnings + payout

    else
      if gt_prev
        money = user.money - total 
        winnings = user.winnings - total 

      else
        money = user.money + total
        winnings = user.winnings + total

      end
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

  def user_message 
    if bet.win
      total = user.money.to_i - money_bet.to_i
      "You won #{total} dollars from your bet on #{bet.player.name} to #{bet.description}"
    else
      "You lost #{money_bet.to_i} dollars from your bet on #{bet.player.name} sucks to suck"
    end
  end


  

end
