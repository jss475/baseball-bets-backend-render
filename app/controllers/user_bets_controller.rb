class UserBetsController < ApplicationController
  before_action :authorize, only: %i[create update destroy]
  before_action :authorize_bet, only: %i[create update destroy]

  def index
    render json: UserBet.all, status: :ok
  end

  def show
    ub = UserBet.find(params[:id])
    render json: ub, status: :ok
  end

  def create
    #user = User.find(session[:user_id])
    bet = current_user.user_bets.create!(ub_params)
    bet.winnings

    #this is so we can use the UserBetSerializer
    ub = UserBet.find(bet.id)

    render json: ub, status: :created
  end

  def destroy
    ub = UserBet.find(params[:id])
    ub.remove_winnings
    bet = ub.bet

    ub.destroy

    render json: bet
  end

  def update
    bet = current_user.user_bets.last

    bet.update!(ub_params)

    bet.update_winnings(params[:prev_bet])

    ub = UserBet.find(bet.id)

    render json: ub, status: :ok
  end

  private

  def ub_params
    params.permit(:user_id, :bet_id, :money_bet)
  end

  # Create authorization for placing a bet
  def authorize
    unless current_user
      render json: { error: "You must be logged in to place bets" }
    end
  end

  def authorize_bet
    unless current_user.has_enough_money?(params[:money_bet])
      render json: {
               error: "You don't have enough money for that"
             },
             status: :payment_required
    end
  end
end
