class BetsController < ApplicationController


    def index
        render json: Bet.all, status: :ok
    end

    def show
        bet = Bet.find(params[:id])
        render json: bet, status: :ok
    end

    def create
        bet = Bet.create!(bet_params)
        render json: bet, status: :created
        # if bet.valid?
        #     render json: bet, status: :created
        # else
        #     render json: {error: bet.errors}, status: :unprocessable_entity
        # end
    end

    def update
        bet = Bet.find(params[:id])
        bet.update!(bet_params)
        render json: bet, status: :ok
    end

    def destroy
        bet = Bet.find(params[:id])
        bet.destroy
        head :no_content
    end



    private

    def bet_params
        params.permit(:user_id, :player_id, :win, :price, :description, :odds, :current_bets)
    end



end
