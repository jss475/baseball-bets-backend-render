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

        ub = user.user_bets.create!(ub_params)

        if ub.winnings 

          render json: { current_bets: ub.bet.current_bets, message: "great success" }

        elsif

          render json: { current_bets: ub.bet.current_bets, message: 'swing and a miss' }

        end

    end

    def destroy
        ub = UserBet.find(params[:id])
        ub.destroy
        head :no_content
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
