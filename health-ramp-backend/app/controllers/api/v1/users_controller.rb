class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      serialized_json = UserSerializer.new(@user).serialized_json
      session[:user_id] = @user.id
      render json: serialized_json, status: :ok
      RecipeCreator.create_initial_recipes(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      serialized_json = UserSerializer.new(@user).serialized_json
      render json: serialized_json, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:email, :password, :name)
  end
end
