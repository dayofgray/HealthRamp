class RecipeCreator

  def self.create_initial_recipes(user)
    Recipe.all.each do |recipe|
      selection = RecipeSelection.create(user_id: user.id, recipe_id: recipe.id, selection_date: Date.today)
      self.create_initial_shopping_list(recipe, selection)
    end
  end

  def self.create_initial_shopping_list(recipe, selection)
    recipe.ingredients.each do |ingredient|
      ShoppingListItem.create(ingredient_id: ingredient.id, recipe_selection_id: selection.id)
    end
  end

end