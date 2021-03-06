# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_05_140004) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ingredients", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "ingredient_id", null: false
    t.integer "quantity", null: false
    t.string "measurement", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "index_recipe_ingredients_on_ingredient_id"
    t.index ["recipe_id"], name: "index_recipe_ingredients_on_recipe_id"
  end

  create_table "recipe_selections", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.date "selection_date", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipe_id"], name: "index_recipe_selections_on_recipe_id"
    t.index ["user_id"], name: "index_recipe_selections_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "steps"
  end

  create_table "shopping_list_items", force: :cascade do |t|
    t.bigint "recipe_selection_id", null: false
    t.bigint "ingredient_id", null: false
    t.boolean "purchased", default: false
    t.index ["ingredient_id"], name: "index_shopping_list_items_on_ingredient_id"
    t.index ["recipe_selection_id"], name: "index_shopping_list_items_on_recipe_selection_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name"
    t.string "password_digest"
  end

  add_foreign_key "recipe_ingredients", "ingredients"
  add_foreign_key "recipe_ingredients", "recipes"
  add_foreign_key "recipe_selections", "recipes"
  add_foreign_key "recipe_selections", "users"
  add_foreign_key "shopping_list_items", "ingredients"
  add_foreign_key "shopping_list_items", "recipe_selections"
end
