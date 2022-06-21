class UsersController < ApplicationController
  
  #before_action :authorize, only: [:show]

  wrap_parameters format: []
    
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user.id, status: :created
    end

    private

    def user_params
        params.permit(:name, :username, :password, :money, :winnings)
    end

#     def authorized
#         render json: { error: 'not authorized' }, status: :unauthorized unless session.include? :user_id
#     end

end
