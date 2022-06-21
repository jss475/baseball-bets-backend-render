class SessionsController < ApplicationController

  def login
    user = User.find_by(username: params[:username])
    
    if user&.authenticate(params[:password])
      
      session[:user_id] = user.id
      head :ok

    else

      render json: { error: 'wrong username or password' }, status: :unauthorized 
    
    end

  end
        
    def logout
        session.delete :user_id
        head :no_content
    end
      

#     def is_authorized?
#         render json: { error: 'not authorized' } unless current_user
#     end

#     def current_user
#         User.find(session[:user_id])
#     end

end
