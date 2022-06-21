class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid


#   def authorize 
#     render json { error: 'wrong username or password'} unless session.include? :user_id
#   end

  private
  
  
  def record_not_found(exception)
    render json: {error: exception}, status: :not_found
  end

  def record_invalid(invalid)
    render json: {errors: invalid.record.errors }, status: :unprocessable_entity
  end

end
