# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Grayson test', email: 'grayson@grayson.com', password: 'password')
user2 = User.create(name: 'Grayson test 2', email: 'grayson2@grayson.com', password: 'password')


recipe1 = Recipe.create(name:"test first recipe")
recipe2 = Recipe.create(name:"test second recipe")

selection1= RecipeSelection.create(user_id: user1.id, recipe_id: recipe1.id, selection_date: Date.today)
selection2= RecipeSelection.create(user_id: user2.id, recipe_id: recipe2.id, selection_date: Date.today)
selection3= RecipeSelection.create(user_id: user1.id, recipe_id: recipe2.id, selection_date: Date.today)

ingredient1 = Ingredient.create(name: "Flour")
ingredient2 = Ingredient.create(name: "Milk")
ingredient3 = Ingredient.create(name: "Egg")

ingredient4 = Ingredient.create(name: "Bacon")
ingredient5 = Ingredient.create(name: "Cheese")

recipe_ingredient1 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient1.id, quantity: 1, measurement: "cup")
recipe_ingredient2 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient2.id, quantity: 2, measurement: "cup")
recipe_ingredient3 = RecipeIngredient.create(recipe_id: recipe1.id, ingredient_id: ingredient3.id, quantity: 3, measurement: "egg")

recipe_ingredient4 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient4.id, quantity: 6, measurement: "strip")
recipe_ingredient4 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient3.id, quantity: 2, measurement: "egg")
recipe_ingredient4 = RecipeIngredient.create(recipe_id: recipe2.id, ingredient_id: ingredient5.id, quantity: 1, measurement: "wedge")

