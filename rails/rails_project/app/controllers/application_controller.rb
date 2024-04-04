class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  include ApiRendering
  include SessionsHelper 

  # helper_method :current_user
  protect_from_forgery with: :exception

  def not_found
    raise ActionController::RoutingError, 'The API endpoint was not found'
  end

  def set_csrf_token_header
    response.set_header('X-CSRF-Token', form_authenticity_token)
  end
end
