class UsersController < ApplicationController
  
  before_action :authorize, only: [:show]
    
    #def index
        #render json: User.all, status: :ok
    #end

    def show
        render json: current_user, status: :ok
    end

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user.id, status: :ok
    end

    private

    def user_params
      params.permit(:name, :username, :password)
    end
        
end
