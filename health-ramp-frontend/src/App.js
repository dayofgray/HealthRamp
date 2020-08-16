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
        <Nav/>
        Welcome {loggedIn ? currentUser.name : "Unidentified User"}
        <Home loggedIn={loggedIn} currentUser={currentUser}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
