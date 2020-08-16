class AuthController < ApplicationController

    def login
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: {user: @user.serialize_user, success: "Welcome back #{@user.name}"}, status: :ok
        else
            render json: {failure: "Issue logging in"}, status: :unauthorized
        end
    end

    def get_current_user
        if current_user
            render json: current_user.serialize_user, status: :ok
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