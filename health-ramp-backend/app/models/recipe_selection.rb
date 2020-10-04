class RecipeSelection < ApplicationRecord
  belongs_to :user
  belongs_to :recipe
  has_many :shopping_list_items

  scope :current_week, -> {where('extract(week from selection_date) = ?', Date.today.cweek)}


end
