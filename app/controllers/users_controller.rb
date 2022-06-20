class UsersController < ApplicationController
    
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
            render json: new_user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_digest, :money, :winnings)
    end

    
end
