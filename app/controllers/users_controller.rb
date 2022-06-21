class UsersController < ApplicationController
  wrap_parameters format: []

  before_action :authorized, only: [:index, :show]

    
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user.id, status: :created
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_digest, :money, :winnings)
    end

    def authorized
        render json: { error: 'not authorized' }, status: :unauthorized unless session.include? :user_id
    end

end
