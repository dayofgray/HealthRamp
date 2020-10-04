import React, { Component } from 'react'
import {Ingredient} from '../presentational/Ingredient'

class ShoppingListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shoppingList: []
    }
  }

  render() {
    const {shoppingList} = this.state
    return (
    shoppingList.map((item) => <Ingredient name={item.ingredient.name} key={item.id} status={item.purchased}/>)
    )
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/shoppinglist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        shoppingList: json
      })
    })
  }
}

export default ShoppingListContainer