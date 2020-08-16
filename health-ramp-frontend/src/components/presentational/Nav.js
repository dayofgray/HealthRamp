import React, { Fragment, Component } from 'react';
import { Navbar } from 'react-bulma-components'
import Logo from '../../images/health-ramp-logo.png'

export default class Nav extends Component {
   
    render() {
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
                        <Navbar.Item href="/login">
                        Login
                        </Navbar.Item>
                        <Navbar.Item href="/signup">
                        Signup
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link renderAs="a" href="/account">
                                My Account
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="/logout">
                                Logout
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}