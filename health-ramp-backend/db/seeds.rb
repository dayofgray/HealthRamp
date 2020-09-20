# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Grayson test', email: 'grayson@grayson.com', password: 'password')
user2 = User.create(name: 'Grayson test 2', email: 'grayson2@grayson.com', password: 'password')


recipe1 = Recipe.create(name:"Roasted Butternut Squash")
recipe2 = Recipe.create(name:"Chicken Quesadilla")
recipe3 = Recipe.create(name:"Egg in the Basket")

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

recipe_ingredient1 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient1.id, quantity: 1, measurement: "whole")
recipe_ingredient2 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient2.id, quantity: 2, measurement: "tablespoons")
recipe_ingredient3 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient3.id, quantity: 2, measurement: "cloves")

recipe_ingredient4 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient4.id, quantity: 2, measurement: "strips")
recipe_ingredient5 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient5.id, quantity: 1, measurement: "wedge")
recipe_ingredient6 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient6.id, quantity: 1, measurement: "wrap")

recipe_ingredient7 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient7.id, quantity: 1, measurement: "egg")
recipe_ingredient8 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient9.id, quantity: 1, measurement: "slice")
recipe_ingredient9 = RecipeIngredient.create(recipe_id: recipe3.id, ingredient_id: ingredient8.id, quantity: 1, measurement: "slice")

