class UserBet < ApplicationRecord
  belongs_to :bbuser
  belongs_to :bet

  validates :bbuser_id, presence: true, numericality: true
  validates :bet_id, presence: true, numericality: true

  # this happens on the create method
  def winnings
    current_bets = (bet.current_bets + money_bet).to_f
    bet.update!(current_bets: current_bets)

    if bet.win
      payout = money_bet * bet.odds
      money = bbuser.money + payout
      winnings = bbuser.winnings + payout
    else
      money = bbuser.money - money_bet
      winnings = bbuser.winnings - money_bet
    end

    bbuser.update!(money: money, winnings: winnings)
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
      money = bbuser.money + payout
      winnings = bbuser.winnings + payout
    else
      if gt_prev
        money = bbuser.money - total
        winnings = bbuser.winnings - total
      else
        money = bbuser.money + total
        winnings = bbuser.winnings + total
      end
    end

    bbuser.update!(money: money, winnings: winnings)
  end

  # this occurs on the delete method. We switch signs because we did all this stuff in winnings method
  def remove_winnings
    current_bets = (bet.current_bets - money_bet).to_f
    bet.update!(current_bets: current_bets)

    if bet.win
      payout = money_bet * bet.odds
      money = bbuser.money - payout
      winnings = bbuser.winnings - payout
    else
      money = bbuser.money + money_bet
      winnings = bbuser.winnings + money_bet
    end

    bbuser.update!(money: money, winnings: winnings)
  end

  def message
    bet.win ? "you hit it out of the park" : "swing and a miss"
  end

  def user_message
    if bet.win
      total = (money_bet * bet.odds).to_i
      "You won #{total} dollars from your bet on #{bet.player.name} to #{bet.description}"
    else
      "You lost #{money_bet.to_i} dollars from your bet on #{bet.player.name} sucks to suck"
    end
  end
end
