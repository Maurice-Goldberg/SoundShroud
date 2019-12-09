class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @User
      log_in(@user)
      render '/api/users/show'
    else 
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy

  end
end
