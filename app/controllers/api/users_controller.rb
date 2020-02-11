class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by_id(params[:id])
    render "api/users/show"
  end

  def update
    @user = User.find_by_id(params[:id])
    if @user.update_attributes(user_update_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:account_name, :email, :password)
  end

  def user_update_params
    params.require(:user).permit(:photo)
  end
end