class BbusersController < ApplicationController
  wrap_parameters format: []
  # before_action :authorized, only: [:show]

  def index
    render json: Bbuser.all, status: :ok
  end

  def show
    curr_user = Bbuser.find_by(id: session[:bbuser_id])
    puts curr_user
    render json: curr_user, status: :ok
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
    params.permit(:name, :username, :password, :password_digest, :money, :winnings)
  end

  def authorized
    curr_user = Bbuser.find_by(id: session[:bbuser_id])
    puts curr_user
    unless curr_user
      render json: { error: "not authorized" }, status: :unauthorized
    end
  end
end
