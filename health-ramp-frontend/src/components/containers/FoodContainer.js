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
            <li>
              <Link to="/recipes">My Recipes for the Week</Link>
            </li>
            <li>
              <Link to="/shoppinglist">My Shopping List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/shoppinglist">
              <ShoppingListContainer/>
            </Route>
            <Route path={["/", "/recipes"]}>
              <RecipeContainer/>
            </Route>
        </Switch>
      </Router>
    )
  }
}

export default FoodContainer