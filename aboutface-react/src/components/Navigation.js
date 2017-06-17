import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation-wrapper">

                        <div className="logo-small">
                            <img src="/images/logo.png" alt="logo-small" />
                        </div>
                            <ul className="nav-ul">
                                <li className="nav-li">
                                    <Link to="/">home</Link>
                                </li>
                                <li className="nav-li">
                                    <NavLink to="/about">about</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink to="/extension">extension</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink to="/resume">resume</NavLink>
                                </li>
                                <li className="nav-li">
                                    <NavLink to="/contact">contact</NavLink>
                                </li>
                            </ul>

            </div>
                    );
    }
}
export default Navigation;