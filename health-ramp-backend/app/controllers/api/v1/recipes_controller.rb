class Api::V1::RecipesController < ApplicationController

  def index
    if current_user
      render :json => current_user.current_week_recipes.to_json(:include => :ingredients)
    else
      render json: {errors: 'No user logged in'}
    end
  end

end