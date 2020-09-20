import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components'
import Logo from '../../images/health-ramp-logo.png'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'

class Nav extends Component {
   
    render() {
        const {loggedIn, logout, currentUser} = this.props
        return (
            <Navbar color="primary">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        <img src={Logo} alt="Health Ramp Logo"/>
                    </Navbar.Item>
                    <Navbar.Burger/>
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container>
                        <Navbar.Item href="/">
                            Home
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="middle">
                        <Navbar.Item renderAs="div">
                          Welcome {loggedIn ? currentUser.data.name : "Unidentified User"}
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        {loggedIn ? (
                        <>
                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link renderAs="a" href="/account">
                                My Account
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item renderAs="a" href="/recipes">
                                  My Recipes
                                </Navbar.Item>
                                <Navbar.Item renderAs="a" href="/shoppinglist">
                                My Shopping List
                                </Navbar.Item>
                                <Navbar.Item onClick={logout}>
                                Logout
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        </>
                        ) : null}
                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.currentUser?.data
    }
}

export default connect(mapStateToProps, {logout})(Nav)