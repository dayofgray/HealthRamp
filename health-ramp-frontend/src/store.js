import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import currentUser from './reducers/currentUserReducer.js'
import loginForm from './reducers/loginFormReducer.js'
import signupForm from './reducers/signupFormReducer.js'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store