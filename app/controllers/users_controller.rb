class UsersController < ApplicationController
  wrap_parameters format: []
  before_action :is_authorized?, only: [:show, :index]
#   before_action :current_user, only: [:show, :index]
  skip_before_action :is_authorized?, only: [:create]
#   skip_before_action :current_user, only: [:create]
    
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:id, :name, :username, :password, :password_digest, :money, :winnings)
    end

    
end
