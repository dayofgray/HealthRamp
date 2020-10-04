import React from 'react'
import {Checkbox} from './Checkbox' 

export const Ingredient = ({name, status}) => {
  return (
    <div class="ingredient-tile">
      <h2>{name}</h2>
      <Checkbox status={status}/>
    </div>
  )
}