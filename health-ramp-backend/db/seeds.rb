# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Grayson test', email: 'grayson@grayson.com', password: 'password')
user2 = User.create(name: 'Grayson test 2', email: 'grayson2@grayson.com', password: 'password')


recipe1 = Recipe.create(name:"Roasted Butternut Squash", steps: "Step 1. Cut skin off and dice the squash into 5 cm cubes. Step 2. Add olive oil and garlic mixture to cubes and roast at 400 F for 25 minutes. Step 3. Enjoy!")
recipe2 = Recipe.create(name:"Chicken Quesadilla", steps: "Step 1. Cut chicken strips in to small pieces. Step 2. Add olive oil to frying pan and cook your tortilla for 30 seconds on low heat. Step 3. Add cheese and chicken to tortilla, fold over and cook on both sides until golden brown.")
recipe3 = Recipe.create(name:"Egg in the Basket", steps: "Step 1. Cut hole out of bread slice with a cup and toast lightly in a pan. Step 2. Add egg to pan inside of the hole in the bread and cook for 1 minute. Step 3. Flip and cook the other side for 1 minute as well and then enjoy!")

selection1 = RecipeSelection.create(user_id: user1.id, recipe_id: recipe1.id, selection_date: Date.today)
selection2 = RecipeSelection.create(user_id: user2.id, recipe_id: recipe2.id, selection_date: Date.today)
selection3 = RecipeSelection.create(user_id: user1.id, recipe_id: recipe2.id, selection_date: Date.today)
selection4 = RecipeSelection.create(user_id: user1.id, recipe_id: recipe3.id, selection_date: Date.today)

ingredient1 = Ingredient.create(name: "Butternut Squash")
ingredient2 = Ingredient.create(name: "Olive Oil")
ingredient3 = Ingredient.create(name: "Garlic")

ingredient4 = Ingredient.create(name: "Chicken")
ingredient5 = Ingredient.create(name: "Cheese")
ingredient6 = Ingredient.create(name: "Tortilla")

ingredient7 = Ingredient.create(name: "Egg")
ingredient8 = Ingredient.create(name: "Bread")
ingredient9 = Ingredient.create(name: "Butter")

item1 = ShoppingListItem.create(ingredient_id: ingredient1.id, recipe_selection_id: selection1.id)
item2 = ShoppingListItem.create(ingredient_id: ingredient2.id, recipe_selection_id: selection1.id)
item3 = ShoppingListItem.create(ingredient_id: ingredient3.id, recipe_selection_id: selection1.id)
item4 = ShoppingListItem.create(ingredient_id: ingredient4.id, recipe_selection_id: selection2.id)
item5 = ShoppingListItem.create(ingredient_id: ingredient5.id, recipe_selection_id: selection2.id)
item6 = ShoppingListItem.create(ingredient_id: ingredient6.id, recipe_selection_id: selection2.id)

recipe_ingredient1 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient1.id, quantity: 1, measurement: "whole")
recipe_ingredient2 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient2.id, quantity: 2, measurement: "tablespoons")
recipe_ingredient3 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient3.id, quantity: 2, measurement: "cloves")

recipe_ingredient4 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient4.id, quantity: 2, measurement: "strips")
recipe_ingredient5 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient5.id, quantity: 1, measurement: "wedge")
recipe_ingredient6 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient6.id, quantity: 1, measurement: "wrap")

recipe_ingredient7 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient7.id, quantity: 1, measurement: "egg")
recipe_ingredient8 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient9.id, quantity: 1, measurement: "slice")
recipe_ingredient9 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient8.id, quantity: 1, measurement: "slice")

