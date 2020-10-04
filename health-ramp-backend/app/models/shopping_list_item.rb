class ShoppingListItem < ApplicationRecord
  belongs_to :recipe_selection
  belongs_to :ingredient

end