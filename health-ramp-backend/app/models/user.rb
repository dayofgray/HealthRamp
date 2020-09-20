class User < ApplicationRecord
  has_secure_password

  has_many :recipe_selections
  has_many :recipes, through: :recipe_selections

  validates :email, :name, presence: true
  validates :email, uniqueness: true

  def current_week_recipes
    recipe_selections.current_week.map(&:recipe)
  end

  def current_week_ingredients
    current_week_recipes.map{|recipe| recipe.ingredients}
  end

  def shopping_list ##need to handle more complex accumulation of different measurement types
    current_week_ingredients.flatten.uniq
  end

end
