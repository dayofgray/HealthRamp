class User < ApplicationRecord
  has_secure_password

  has_many :recipe_selections
  has_many :recipes, through: :recipe_selections

  validates :email, :name, presence: true
  validates :email, uniqueness: true

  def current_week_recipes
    self.recipe_selections.current_week.map(&:recipe)
  end
end
