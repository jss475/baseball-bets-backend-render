class SessionsController < ApplicationController

  def login
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])

      render json: user.id, status: :ok

    else

      render json: { error: 'wrong username or password' }, status: :unauthorized 

    end

  end

end
