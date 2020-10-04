import React from 'react'

export const Recipe = ({name, ingredients}) => {
  const ingredientList = ingredients.map((i) => <li key={i.id}>{i.name}</li>)

  return (
    <div class="recipe-tile">
      <h2>{name}</h2> <br></br>
      <p class="bold">Ingredients({ingredients.length})</p>
      <ul>
        {ingredientList}
      </ul>
    </div>
  )
}