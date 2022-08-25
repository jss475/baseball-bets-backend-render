class PlayersController < ApplicationController
  def index
    render json: Player.all, status: :ok
  end

  def show
    player = Player.find(params[:id])
    render json: player, status: :ok
  end
end
