class UsersController < ApplicationController
  wrap_parameters format: []
  before_action :is_authorized?, only: [:show, :index]
  skip_before_action :is_authorized?, only: [:create]

    
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
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

    def is_authorized?
        render json: { error: 'not authorized' } unless current_user
    end

    def current_user
        User.find(session[:user_id])
    end
end
