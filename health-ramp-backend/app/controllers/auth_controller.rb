class AuthController < ApplicationController

    def login
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            payload = {user_id: @user.id}
            token = encode_token(payload)
            render json: {user: user_serializer(@user), jwt: token, success: "Welcome back #{@user.name}"}
        else
            render json: {failure: "Issue logging in"}
        end
    end

    def logged_in_user
        if session_user
            render json: user_serializer(session_user)
        else
            render json: {errors: "No user logged in"}
        end
    end

end