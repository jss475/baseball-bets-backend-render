class SessionsController < ApplicationController
  def login
    user = Bbuser.find_by(username: params[:username])

    puts user

    if user&.authenticate(params[:password])
      session[:bbuser_id] = user.id
      head :ok
    else
      render json: {
               error: "wrong username or password"
             },
             status: :unauthorized
    end
  end

  def logout
    session.delete :bbuser_id
    head :no_content
  end
end
