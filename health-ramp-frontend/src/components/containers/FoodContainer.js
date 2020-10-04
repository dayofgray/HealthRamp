import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import ShoppingListContainer from './ShoppingListContainer'
import RecipeContainer from './RecipeContainer'

class FoodContainer extends Component {

  render() {
    return (
      <Router>
        <nav class="in-app-nav">
          <ul>
            <li class="recipe-link">
              <Link to="/recipes">My Recipes for the Week</Link>
            </li>
            <li class="shopping-list-link">
              <Link to="/shoppinglist">My Shopping List</Link>
            </li>
          </ul>
        </nav>
        <div class="list-container">
        <Switch>
            <Route path="/shoppinglist">
              <ShoppingListContainer/>
            </Route>
            <Route path={["/", "/recipes"]}>
              <RecipeContainer/>
            </Route>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default FoodContainer