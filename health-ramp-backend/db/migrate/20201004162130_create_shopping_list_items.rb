class CreateShoppingListItems < ActiveRecord::Migration[6.0]
  def change
    create_table :shopping_list_items do |t|
      t.references :recipe_selection, foreign_key: true, null: false
      t.references :ingredient, foreign_key: true, null: false
      t.boolean :purchased, default: false
    end
  end
end
