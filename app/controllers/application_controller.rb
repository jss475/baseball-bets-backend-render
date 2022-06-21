class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  # rescue_from ActionController::UnpermittedParameters, with: :unpermitted_parameters


  private
  
  def record_not_found(exception)
    render json: {error: exception}, status: :not_found
  end

  def record_invalid(invalid)
    render json: {error: invalid.record.errors }, status: :unprocessable_entity
  end

  # def unpermitted_parameters(invalid)
  #   return render json: {error: invalid}, status: :unprocessable_entity
  # end

end
