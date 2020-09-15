class User < ApplicationRecord
  has_secure_password

  has_many :recipe_selections
  has_many :recipes, through: :recipe_selections

  validates :email, :name, presence: true
  validates :email, uniqueness: true
end
