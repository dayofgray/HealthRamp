class RecipeSelection < ApplicationRecord
  belongs_to :user
  belongs_to :recipe

  scope :current_week, -> {where('extract(week from selection_date) = ?', Date.today.cweek)}


end
