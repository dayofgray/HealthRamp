class RecipeCreator

  def self.create_initial_recipes(user)
    Recipe.all.each do |recipe|
      RecipeSelection.create(user_id: user.id, recipe_id: recipe.id, selection_date: Date.today)
    end
  end

end