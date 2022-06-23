class UserBetsController < ApplicationController

    before_action :authorize, only: [:create, :destroy]

    def index
        render json: UserBet.all, status: :ok
    end

    def show
        ub = UserBet.find(params[:id])
        render json: ub, status: :ok
    end

    def create

        user = User.find(session[:user_id])
        bet = user.user_bets.create!(ub_params)
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
        user = User.find(session[:user_id]) 
        ub = user.user_bets.last

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

        return render json: {error: "Not authorized"} unless session.include? :user_id

    end
end
