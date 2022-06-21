class UserBetsController < ApplicationController

    def index
        render json: UserBet.all, status: :ok
    end

    def show
        ub = UserBet.find(params[:id])
        render json: ub, status: :ok
    end

    def create
        ub = UserBet.create!(ub_params)
        render json: ub, status: :created
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
end
