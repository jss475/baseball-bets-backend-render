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
        # adding a way to increase the current_bets of the bet/updating it by the money_bet
        ub.winnings
        render json: ub, status: :created

    end

    def destroy
        ub = UserBet.find(params[:id])
        ub.remove_winnings
        bet = ub.bet
        ub.destroy
        # head :no_content
        render json: bet
    end

    def update
        ub = UserBet.find(params[:id])
        ub.update!(ub_params)
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
