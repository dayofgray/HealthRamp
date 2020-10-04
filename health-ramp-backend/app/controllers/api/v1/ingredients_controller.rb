class Api::V1::IngredientsController < ApplicationController

  def index
    if current_user
      render :json => current_user.shopping_list.to_json(:include => :ingredient)
    else
      render json: {errors: 'No user logged in'}
    end
  end

end