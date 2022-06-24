class UserBetsController < ApplicationController

    before_action :authorize, only: [:create, :update, :destroy]
    before_action :authorize_bet, only:[:create, :update, :destroy]

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
        ub = current_user.user_bets.last

        ub.update!(ub_params)

        ub.update_winnings(params[:prev_bet])

        render json: ub, status: :ok
    end

    private

    def ub_params
        params.permit(:user_id, :bet_id, :money_bet)
    end

    # Create authorization for placing a bet
    def authorize

      render json: { error: "You must be logged in to place bets" } unless current_user 

    end

    def authorize_bet
      render json: { error: "You don't have enough money for that" }, 
        status: :payment_required unless current_user.has_enough_money?(params[:money_bet]) 

    end

end
