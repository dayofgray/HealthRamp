class CreateRecipeIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_ingredients do |t|
      t.references :recipe, foreign_key: true, null: false
      t.references :ingredient, foreign_key: true, null: false
      t.integer :quantity, null: false
      t.string :measurement, null: false

      t.timestamps
    end
  end
end
