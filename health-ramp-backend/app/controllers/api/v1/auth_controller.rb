class Api::V1::AuthController < ApplicationController

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      serialized_json = UserSerializer.new(@user).serialized_json
      render json: serialized_json, status: :ok
    else
      render json: {errors: "Issue logging in"}, status: :unauthorized
    end
  end

  def get_current_user
    if current_user
      serialized_json = UserSerializer.new(current_user).serialized_json
      render json: serialized_json, status: :ok
    else
      render json: {errors: "No user logged in"}
    end
  end

  def destroy
    session.clear
    render json: {
        message: "Successfully logged out"
      }, status: :ok
  end

end