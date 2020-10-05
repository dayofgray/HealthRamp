class Api::V1::RecipesController < ApplicationController

  def show
    if current_user
      recipe = Recipe.find_by(id: params[:id])
      render :json => recipe
    else
      render json: {errors: 'No user logged in'}
    end
  end
  
  def index
    if current_user
      render :json => current_user.current_week_recipes.to_json(:include => :ingredients)
    else
      render json: {errors: 'No user logged in'}
    end
  end

end