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
        <nav>
          <ul>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/shoppinglist">Shppping List</Link>
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