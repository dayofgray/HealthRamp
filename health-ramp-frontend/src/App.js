import React, { Component } from 'react';
import './App.css';
import Nav from './components/presentational/Nav.js'
import Home from './components/containers/Home'
import { getCurrentUser } from './actions/currentUser'
import { connect } from 'react-redux'


class App extends Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    const {loggedIn, currentUser} = this.props
      return (
        <div className="App">
          <Nav currentUser={currentUser}/>
          {currentUser?.loading ?
           "Loading" :
           <Home loggedIn={loggedIn} currentUser={currentUser}/>}
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.currentUser?.data,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
