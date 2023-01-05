class BbusersController < ApplicationController
  # before_action :authorized, only: [:show]

  def index
    render json: Bbuser.all, status: :ok
  end

  def show
    render json: current_user, include: ["user_bets.bet"], status: :ok
    # include: ["user_bets.bet"],
  end

  def create
    user = Bbuser.create!(user_params)
    session[:bbuser_id] = user.id
    render json: user.id, status: :created
  end

  def add_money
    money = current_user.money + params[:money].to_f
    current_user.update!(money: money)
    head :ok
  end

  private

  def user_params
    params.permit(:name, :username, :password, :money, :winnings)
  end

  def authorized
    unless current_user
      render json: { error: "not authorized" }, status: :unauthorized
    end
  end
end