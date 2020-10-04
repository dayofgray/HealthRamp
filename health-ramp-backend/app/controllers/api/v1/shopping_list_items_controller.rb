class Api::V1::ShoppingListItemsController < ApplicationController

  def update
    item = ShoppingListItem.find_by(id: params[:id])
    if current_user && item.recipe_selection.user == current_user
      item.update(item_params)
      render json: item
    else
      render json: {errors: 'Not authorized'}
    end
  end

  private

  def item_params
    params.require(:shopping_list_item).permit(:purchased)
  end

end