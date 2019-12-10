class ApplicationController < ActionController::Base
  def current_user
    if session[:session_token]
      return @current_user ||= User.find(session_token: session[:session_token])
    end
    return nil
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def log_out
    session[:session_token] = nil
    @current_user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def require_user_logged_in
    unless logged_in?
      render json: { base: ['must log in first'] }, status: 401
    end
  end
end
