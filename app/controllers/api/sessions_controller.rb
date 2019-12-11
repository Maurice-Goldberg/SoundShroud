class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    # debugger
    if @user
      # debugger
      log_in(@user)
      render '/api/users/show'
    else 
      # debugger
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render '/api/users/show'
    else
      render json: ["There is no user logged in currently."], status: 404
    end
  end
end
