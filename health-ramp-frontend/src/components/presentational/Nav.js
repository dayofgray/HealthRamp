import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components'
import Logo from '../../images/health-ramp-logo.png'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'

class Nav extends Component {
   
    render() {
        const {loggedIn, logout} = this.props
        return (
            <Navbar color="primary">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        <img src={Logo} alt="Health Ramp Logo"/>
                    </Navbar.Item>
                    <Navbar.Burger/>
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container position="end">
                        {!loggedIn ? (
                        <>
                        <Navbar.Item href="/signup">
                        Signup
                        </Navbar.Item>
                        <Navbar.Item href="/login">
                        Login
                        </Navbar.Item>
                        </>
                        ) : (
                        <>
                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link renderAs="a" href="/account">
                                My Account
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item onClick={logout}>
                                Logout
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        </>
                        )}
                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, {logout})(Nav)