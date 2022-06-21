class SessionsController < ApplicationController
    before_action :is_authorized?, only: [:destroy]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def is_authorized?
        render json: { error: 'not authorized' } unless current_user
    end

    def current_user
        User.find(session[:user_id])
    end

end
