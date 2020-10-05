import React, {Component} from 'react'
import {RecipeStep} from '../presentational/RecipeStep'

class RecipeStepsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
  }

  render() {
    const {steps} = this.state
    return (
    <div className="list-container">
      {steps.map((step) => <RecipeStep step={step}/>)}
    </div>
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const url = `http://localhost:3001/api/v1/recipes/` + id
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(json => {
      const stepString = json.steps
      const steps = stepString.split(/Step \d. /gm).slice(1)
      this.setState({
        steps: steps
      })
    })
  }
}

export default RecipeStepsContainer