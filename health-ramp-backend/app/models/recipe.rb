class Recipe < ApplicationRecord
  has_many :recipe_selections
  has_many :users, through: :recipe_selections
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
end
