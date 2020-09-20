import React from 'react'

export const Recipe = ({name}) => {
  return (
    <div class="recipe-tile">
      <li>{name}</li>
    </div>
  )
}