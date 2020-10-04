class User < ApplicationRecord
  has_secure_password

  has_many :recipe_selections
  has_many :recipes, through: :recipe_selections
  has_many :shopping_list_items, through: :recipe_selections

  validates :email, :name, presence: true
  validates :email, uniqueness: true

  def current_week_recipes
    recipe_selections.current_week.map(&:recipe)
  end

  def shopping_list ##need to handle more complex accumulation of different measurement types
    recipe_selections.current_week.map(&:shopping_list_items).flatten
  end

end
