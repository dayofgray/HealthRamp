class CreateRecipeSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_selections do |t|
      t.references :user, foreign_key: true, null: false
      t.references :recipe, foreign_key: true, null: false
      t.date :selection_date, null: false

      t.timestamps
    end
  end
end
