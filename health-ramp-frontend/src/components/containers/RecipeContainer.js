import React, {Component} from 'react'
import {Recipe} from '../presentational/Recipe'

class RecipeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  onClick(id) {
    const url = "http://localhost:3000/recipes/" + id
    window.location.replace(url)
  }

  render() {
    const {recipes} = this.state
    return (
    recipes.map((r) => <Recipe name={r.name} key={r.id} ingredients={r.ingredients} onClick={this.onClick} id={r.id}/>)
    )
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/recipes`, {
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
        recipes: json
      })
    })
  }
}

export default RecipeContainer