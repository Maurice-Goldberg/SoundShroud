class ApplicationController < ActionController::Base
  def current_user
    if session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
      return @current_user
    end
    return nil
  end

  def log_in(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
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
